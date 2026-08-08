"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { submitTourInquiryAction } from "@/actions/tour.actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import CountryPicker from "../shared/country-picker/country-picker";
import type { Country } from "@/components/shared/country-picker/countries";
import PhoneInput from "../shared/phone-input";

interface InquiryFormProps {
  tourTitle: string;
}

export default function InquiryForm({ tourTitle }: InquiryFormProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState<Country | null>(null);
  const [travelDate, setTravelDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    startTransition(async () => {
      const result = await submitTourInquiryAction({
        name,
        email,

        phone: country
          ? `${country.dialCode}${phone.replace(/\s/g, "")}`
          : phone,

        country: country?.name ?? "",

        tour: tourTitle,
        travelDate,
        guests,
        message,
      });

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setCountry(null);
      setTravelDate("");
      setGuests(1);
      setMessage("");

      router.refresh();
    });
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pius-red">
          Plan Your Experience
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Tell us where you want to go.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Tell us what you have in mind, and our team will work with you to
          create the right tour or excursion.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name + Email */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>

            <Input
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>

            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>

          <PhoneInput country={country} value={phone} onChange={setPhone} />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>

          <CountryPicker value={country} onChange={setCountry} />
        </div>

        {/* Travel Date + Guests */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="travelDate">Preferred Travel Date</Label>

            <Input
              id="travelDate"
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              required
            />

            <p className="text-xs text-slate-500">
              This is your preferred date. Our team will confirm availability
              with you.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>

            <Input
              id="guests"
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Special Requests</Label>

          <Textarea
            id="message"
            rows={6}
            placeholder="Tell us anything that will help us prepare for your trip..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Submitting..." : "Send Inquiry"}
        </Button>
      </form>
    </div>
  );
}
