"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Spinner from "./Spinner";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(3, { message: "Name must be at least 3 characters" }),
});

type FormFields = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        toast.success("Form successfully submitted");
        console.log("data", data);
        resolve();
        reset();
      }, 1000)
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full px-4 md:px-20 py-8"
    >
      <div className="flex flex-col md:flex-row gap-2 md:gap-20 text-sm text-gray-500 font-semibold">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="">
            Navn:
          </label>
          <div className="mb-4">
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              className="border-b-2 border-gray-300 rounded px-3 py-2  bg-transparent"
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="">
            E-post:
          </label>
          <div className="mb-4">
            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              className="border-b-2 border-gray-300 rounded px-3 py-2 bg-transparent"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
        </div>
      </div>

      <label
        htmlFor="subject"
        className="mb-2 mt-2 md:mt-1 text-sm text-gray-500 font-semibold"
      >
        Tema:
      </label>
      <input
        {...register("subject")}
        type="text"
        id="subject"
        name="subject"
        className="border-b-2 border-gray-300 rounded px-3 py-2 mb-4 bg-transparent"
      />
      {errors.subject && (
        <div className="text-red-500">{errors.subject.message}</div>
      )}

      <label
        htmlFor="message"
        className="text-sm text-blackish font-semibold mt-4"
      >
        Melding:
      </label>
      <textarea
        {...register("message")}
        id="message"
        name="message"
        className="border-b-2 border-blackish rounded px-3 py-2 mb-4 bg-transparent relative"
        rows={4}
        placeholder="Skriv meldingen her"
      ></textarea>
      {errors.message && (
        <div className="text-red-500">{errors.message.message}</div>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="flex h-[48px] justify-center items-center md:max-w-[200px] bg-blackish text-white text-sm py-3 font-semibold rounded-lg mt-8 hover:opacity-85 transition duration-300 ease-in-out"
      >
        {isSubmitting ? <Spinner /> : "Send Melding"}
      </button>
    </form>
  );
}
