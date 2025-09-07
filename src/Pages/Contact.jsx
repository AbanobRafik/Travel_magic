import React, { useState } from "react";
import { MessageCircle, Calendar, Mail, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    type: "",
    place: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      to_email: formData.email,
      type: formData.type,
      place: formData.place || "—",
      message: formData.message,
    };

    emailjs
      .send(
        "service_sr0udm8", // Service ID من Dashboard
        "template_82wahed", // Template ID من Dashboard
        templateParams, // البيانات اللي بتتبعت
        "id6tk0nFWHCAm4xa6" // Public Key
      )

      .then(
        () => {
          alert("✅ تم إرسال طلبك بنجاح");
          setFormData({ type: "", place: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("❌ حصل خطأ أثناء الإرسال: " + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-lg transition transform hover:scale-[1.01]">
        <h2 className="text-3xl font-extrabold text-amber-700 text-center mb-8">
          الاستفسار والحجز
        </h2>

        {/* اختيار نوع الطلب */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition cursor-pointer ${
              formData.type === "استفسار"
                ? "bg-amber-600 text-white border-amber-600"
                : "border-gray-300 hover:border-amber-500"
            }`}
            onClick={() =>
              setFormData((prev) => ({ ...prev, type: "استفسار", place: "" }))
            }
          >
            <MessageCircle size={28} />
            <span className="mt-2 font-semibold">استفسار</span>
          </button>

          <button
            type="button"
            className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition cursor-pointer ${
              formData.type === "حجز"
                ? "bg-amber-600 text-white border-amber-600"
                : "border-gray-300 hover:border-amber-500"
            }`}
            onClick={() => setFormData((prev) => ({ ...prev, type: "حجز" }))}
          >
            <Calendar size={28} />
            <span className="mt-2 font-semibold">حجز أماكن</span>
          </button>
        </div>

        {/* الفورم */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {formData.type === "حجز" && (
            <div>
              <label className="text-gray-700 mb-1 flex items-center gap-2">
                <MapPin size={18} className="text-amber-600" />
                اختر المكان
              </label>
              <select
                name="place"
                value={formData.place}
                onChange={handleChange}
                required
                className="w-full border rounded-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">-- اختر المكان --</option>
                <option value="مرسى علم">مرسى علم</option>
                <option value="الاقصر واسوان">الاقصر واسوان</option>
                <option value="الغردقة والجونة">الغردقة والجونة</option>
                <option value="مرسى مطروح">مرسى مطروح</option>
                <option value="شرم الشيخ ودهب">شرم الشيخ ودهب</option>
                <option value="الاسكندريه و الساحل الشمالي">
                  الاسكندريه و الساحل الشمالي
                </option>
                <option value="العلمين الجديدة والعين السخنة">
                  العلمين الجديدة والعين السخنة
                </option>
              </select>
            </div>
          )}

          {/* البريد */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="اكتب بريدك الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-2xl px-10 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* الرسالة */}
          <textarea
            name="message"
            placeholder="اكتب رسالتك هنا..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          ></textarea>

          {/* زر الإرسال */}
          <button
            type="submit"
            disabled={
              loading ||
              !formData.type ||
              (formData.type === "حجز" && !formData.place)
            }
            className={`w-full py-3 rounded-2xl font-bold text-lg transition ${
              formData.type && (formData.type !== "حجز" || formData.place)
                ? "bg-amber-600 text-white hover:bg-amber-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {loading ? "جارٍ الإرسال..." : "إرسال"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
