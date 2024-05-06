import { z } from "zod";

export const RegistrationSchema = z
	.object({
		email: z.string().email(),
		firstName: z.string(),
		lastName: z.string(),
		password: z.string().min(5),
		phone: z
			.string()
			.regex(/^\d+$/, { message: "Invalid phone number" })
			.refine((value) => value.length >= 5, {
				message: "Phone number must be lager then 5 digits long",
			}),
		gender: z.enum(["male", "female"], {
			message: "Gender required",
			required_error: "Gender required",
		}),
		passwordConfirm: z.string({ message: "Password not match" }),
	})
	.refine((data) => data.password === data.passwordConfirm, {
		message: "Passwords do not match",
		path: ["passwordConfirm"],
	});
export type RegistrationSchemaType = z.infer<typeof RegistrationSchema>;
