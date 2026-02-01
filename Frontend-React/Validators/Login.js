import * as z from "zod";

const loginSchema = z.object({
  username: z
    .string({
      required_error: "وارد کردن نام کاربری الزامی است.",
      invalid_type_error: "نام کاربری باید متن باشد.",
    })
    .min(3, "نام کاربری باید حداقل شامل تعدادی حرف باشد.")
    .max(20, "نام کاربری باید حداکثر شامل 20 حرف باشد.")
    // .regex()
    ,

  password: z
    .string({
      required_error: "وارد کردن نام کاربری الزامی است.",
      invalid_type_error: "نام کاربری باید متن باشد.",
    })
    .min(8, "رمز عبور  باید حداقل شامل 8 حرف باشد.")
    .max(18, "رمز عبور  باید حداکثر شامل 18 حرف باشد.")
    .regex(/[a-z]/,"رمز عبور  باید  شامل یک حرف کوچک باشد.")
    .regex(/[A-Z]/,"رمز عبور  باید  شامل یک حرف بزرگ باشد.")
    .regex(/[0-9]/,"رمز عبور  باید  شامل ارقام باشد.")
    // .regex()
    ,

});

export default loginSchema;
