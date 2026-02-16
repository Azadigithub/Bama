import { useState, useEffect } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-2 bg-black text-white rounded-2xl shadow-lg hover:opacity-90 transition"
      >
        باز کردن مودال
      </button>

      {visible && (
        <div className="font-Vazir fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          <div
            className={`relative bg-white w-full max-w-md mx-4 rounded-2xl shadow-2xl  p-[20px] transform transition-all  duration-200 ${
              open
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">شروع آزمون</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black transition"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              برای شروع آزمون آماده هستید؟
            </p>
            <p>
              {" "}
              لازم به ذکر است پس از شروع ،تنها یکبار میتوانید درآزمون شرکت کنید.
            </p>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="py-[10px] px-[20px] rounded-xl border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
              >
                انصراف
              </button>
              <button className="py-[10px] px-[20px] rounded-xl bg-black text-white hover:opacity-90 transition cursor-pointer">
                شروع آزمون
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
