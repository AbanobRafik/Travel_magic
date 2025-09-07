import { Link } from "react-router";
import { MapPin, Star, Calendar } from "lucide-react";
import "photoswipe/dist/photoswipe.css"; // لو حابب Lightbox

const images = [
  { src: "/img/marsaalam.jpg", title: "شاطئ مرسى علم" },
  { src: "/img/marsaalam2.jpg", title: "الشعاب المرجانية" },
  { src: "/img/marsaalam3.jpg", title: "رحلة سفاري" },
  { src: "/img/marsaalam4.jpg", title: "الغروب على الشاطئ" },
  { src: "/img/marsaalam5.jpg", title: "رياضات مائية" },
  { src: "/img/marsaalam6.jpeg", title: "رياضات مائية" },
];

const Marsaalam = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* 🖼 معرض الصور */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-3xl font-bold text-amber-700 text-center mb-10">
          لقطات من مرسى علم
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-lg font-semibold">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📝 الوصف */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 text-center">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          مرسى علم وجهة مثالية لعشاق الهدوء والطبيعة. بشواطئها البكر وشعابها
          المرجانية المذهلة، هتلاقي تجربة مختلفة تمامًا من الاسترخاء والمغامرات
          المائية.
        </p>
      </div>

      {/* ⭐ المميزات */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-700 text-center mb-10">
          ليه تختار مرسى علم؟
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <Star className="mx-auto text-amber-500" size={36} />
            <h3 className="text-xl font-bold mt-4 mb-2">منتجعات 5 نجوم</h3>
            <p className="text-gray-600">
              استمتع بأفخم الفنادق المطلة على البحر وخدمات راقية.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <MapPin className="mx-auto text-amber-500" size={36} />
            <h3 className="text-xl font-bold mt-4 mb-2">أماكن مميزة</h3>
            <p className="text-gray-600">
              رحلات غطس، سفاري في الصحراء، وشواطئ طبيعية هادئة.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <Calendar className="mx-auto text-amber-500" size={36} />
            <h3 className="text-xl font-bold mt-4 mb-2">عروض حصرية</h3>
            <p className="text-gray-600">
              باكدج كاملة تشمل إقامة + وجبات + رحلات بأسعار خاصة.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-amber-700 transition"
          >
            احجز رحلتك الآن 🚀
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Marsaalam;
