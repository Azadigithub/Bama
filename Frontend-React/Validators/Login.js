import * as z from "zod";

export const loginSchema = z.object({
  username: z
    .string({
      required_error: "وارد کردن نام کاربری الزامی است.",
      invalid_type_error: "نام کاربری باید متن باشد.",
    })
    .min(1, "وارد کردن نام کاربری الزامی است.")
    .max(20, "نام کاربری باید حداکثر شامل 20 حرف باشد."),
  // .regex()
  password: z
    .string({
      required_error: "وارد کردن رمز عبور الزامی است.",
    })
    // .min(8, "رمز عبور  باید حداقل شامل 8 حرف باشد.")
    // .regex(/[a-z]/,"رمز عبور  باید  شامل یک حرف کوچک باشد.")
    // .regex(/[A-Z]/, " نام کاربری یا رمز عبور صحیح نمی باشد!")
    // .regex(/[0-9]/, " نام کاربری یا رمز عبور صحیح نمی باشد!"),
  // .regex()
});

export const signinschema = z.object({
  username: z
    .string("وارد  نام کاربری باید متن باشد.")
    .min(1,"وارد کردن نام کاربری الزامی است.")
    .max(20, "نام کاربری باید حداکثر شامل 20 حرف باشد."),
  // .regex()
  password: z
    .string({
      required_error: "وارد کردن نام کاربری الزامی است.",
      invalid_type_error: "نام کاربری باید متن باشد.",
    })
    // .min(8, "رمز عبور  باید حداقل شامل 8 حرف باشد.")
    .max(30, "رمز عبور  باید حداکثر شامل 30 حرف باشد.")
    // .regex(/[a-z]/,"رمز عبور  باید  شامل یک حرف کوچک باشد.")
    .regex(/[A-Z]/, "رمز عبور  باید  شامل یک حرف بزرگ باشد.")
    .regex(/[0-9]/, "رمز عبور  باید  شامل ارقام باشد."),
  // .regex()
  repeatpassword: z.string(" تکرار رمز عبور باید متن باشد."),
  email: z.string(" ایمیل باید متن باشد."),
});

// export default loginSchema;
// export default signinschema;
