"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { submitRailInquiryAction } from "@/actions/rail.actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import CountryPicker from "@/components/shared/country-picker/country-picker";
import PhoneInput from "@/components/shared/phone-input";

import type { Country } from "@/components/shared/country-picker/countries";

interface RailBookingFormProps {
  onSuccess?: () => void;
}

export default function RailBookingForm({ onSuccess }: RailBookingFormProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [country, setCountry] = useState<Country | null>(null);

  const [phone, setPhone] = useState("");

  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");

  const [travelDate, setTravelDate] = useState("");

  const [passengers, setPassengers] = useState(1);

  const [message, setMessage] = useState("");

  function resetForm() {
    setFullName("");
    setEmail("");

    setCountry(null);
    setPhone("");

    setDeparture("");
    setDestination("");

    setTravelDate("");

    setPassengers(1);

    setMessage("");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!country) {
      toast.error("Please select your country.");

      return;
    }

    startTransition(async () => {
      const result = await submitRailInquiryAction({
        fullName,
        email,

        phone: `${country.dialCode}${phone.replace(/\s/g, "")}`,

        country: country.name,

        departure,
        destination,

        travelDate,

        passengers,

        message,
      });

      if (!result.success) {
        toast.error(result.message);

        return;
      }

      toast.success(result.message);

      resetForm();

      router.refresh();

      onSuccess?.();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Full Name</Label>

          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Email Address</Label>

          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Country</Label>

          <CountryPicker value={country} onChange={setCountry} />
        </div>

        <div className="space-y-2">
          <Label>Phone Number</Label>

          <PhoneInput country={country} value={phone} onChange={setPhone} />
        </div>

        <div className="space-y-2">
          <Label>Departure Station</Label>

          <Input
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder="Lagos"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Destination</Label>

          <Input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Abuja"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Travel Date</Label>

          <Input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Passengers</Label>

          <Input
            type="number"
            min={1}
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Additional Notes</Label>

        <Textarea
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Anything you'd like us to know..."
        />
      </div>

      <Button className="w-full" disabled={isPending}>
        {isPending ? "Submitting..." : "Book Journey"}
      </Button>
    </form>
  );
}
