"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  transportQuoteSchema,
  type TransportQuoteValues,
} from "@/lib/validations/transport";

export default function TransportQuoteForm({
  serviceTitle,
}: {
  serviceTitle: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<TransportQuoteValues>({
    resolver: zodResolver(transportQuoteSchema),

    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      pickup: "",
      destination: "",
      cargo: "",
      shipmentDate: "",
      message: "",
    },
  });

  async function onSubmit(values: TransportQuoteValues) {
    try {
      setIsSubmitting(true);

      const payload = {
        ...values,
        service: serviceTitle,
      };

      const response = await fetch("/api/transport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success(
        "Thank you! Your transport inquiry has been received. We'll contact you shortly.",
      );

      form.reset();
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        {/* ========================= */}
        {/* Personal Information */}
        {/* ========================= */}

        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-xl font-semibold">
              Personal Information
            </h3>

            <p className="text-sm text-muted-foreground">
              Tell us who you are.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>

                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>

                  <FormControl>
                    <Input placeholder="ABC Logistics Ltd." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>

                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>

                  <FormControl>
                    <Input placeholder="+234..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* ========================= */}
        {/* Shipment Information */}
        {/* ========================= */}

        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-xl font-semibold">
              Shipment Information
            </h3>

            <p className="text-sm text-muted-foreground">
              Help us understand your transport request.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              control={form.control}
              name="pickup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pickup Location *</FormLabel>

                  <FormControl>
                    <Input placeholder="Lagos" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination *</FormLabel>

                  <FormControl>
                    <Input placeholder="Abuja" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cargo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cargo Type</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Container, Food, Equipment..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shipmentDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Shipment Date</FormLabel>

                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        {/* ========================= */}
        {/* Additional Details */}
        {/* ========================= */}

        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-xl font-semibold">
              Additional Details
            </h3>

            <p className="text-sm text-muted-foreground">
              Tell us more about your {serviceTitle.toLowerCase()} needs.
            </p>
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>

                <FormControl>
                  <Textarea
                    placeholder={`Tell us about your ${serviceTitle} needs...`}
                    className="min-h-[180px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Request Quote"
          )}
        </Button>
      </form>
    </Form>
  );
}
