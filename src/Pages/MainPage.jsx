import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const MainPage = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // نستخدم wrapper يختار بين motion.div و div عادي

  const MotionOrDiv = ({ children, ...rest }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    if (isDesktop) {
      return <motion.div {...rest}>{children}</motion.div>;
    }
    return <div {...rest}>{children}</div>; // مرر rest هنا
  };

  const MotionOrH2 = ({ children, ...rest }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    if (isDesktop) {
      return <motion.h2 {...rest}>{children}</motion.h2>;
    }
    return <h2 {...rest}>{children}</h2>; // برضه هنا
  };

  return (
    <main className="mt-12">
      {/* First Section */}
      <div className="px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center md:gap-8 lg:gap-12">
        {/* Logo + Text Section */}
        <MotionOrDiv
          initial={isDesktop ? { opacity: 0, x: 50 } : {}}
          animate={isDesktop ? { opacity: 1, x: 0 } : {}}
          transition={isDesktop ? { duration: 0.8 } : {}}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <img
            src="/logo.png"
            alt="logo"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96"
          />

          {/* Text */}
          <div className="flex flex-col gap-2 mt-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-500 leading-snug">
              اكتشف أماكن مذهلة
              <span className="text-amber-500 block">معانا</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed">
              سافر إلى أجمل وجهات مصر بأسعار تناسب كل الفئات
            </h2>
          </div>
        </MotionOrDiv>

        {/* Image Section */}
        <MotionOrDiv
          initial={isDesktop ? { opacity: 0, x: -50 } : {}}
          animate={isDesktop ? { opacity: 1, x: 0 } : {}}
          transition={isDesktop ? { duration: 0.8, delay: 0.3 } : {}}
          className="w-full md:w-auto min-w-[14rem] sm:min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem] max-w-[32rem]"
        >
          <img
            src="/img/beach.jpg"
            alt="Beach"
            className="rounded-lg aspect-square object-cover w-full shadow-md shadow-gray-700"
          />
        </MotionOrDiv>
      </div>
      {/* End of First Section */}

      {/* Second Section */}
      <section className="bg-neutral-100 w-full mt-12 py-12">
        <div className="px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row-reverse justify-between items-center md:gap-8 lg:gap-12">
          {/* Image */}
          <MotionOrDiv
            initial={isDesktop ? { opacity: 0, x: 50 } : {}}
            whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
            transition={isDesktop ? { duration: 0.8 } : {}}
            className="w-full md:w-auto min-w-[14rem] sm:min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem] max-w-[32rem]"
          >
            <img
              src="/img/family.png"
              alt="Family"
              className="rounded-lg object-cover w-full shadow-md shadow-gray-700"
            />
          </MotionOrDiv>

          {/* Text */}
          <MotionOrDiv
            initial={isDesktop ? { opacity: 0, x: -50 } : {}}
            whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
            transition={isDesktop ? { duration: 0.8, delay: 0.3 } : {}}
            className="flex flex-col text-right max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mt-5 text-orange-500 mb-4">
              كلمة مننا ليكم
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              يا أهلاً بيكم،
              <br />
              سنة ٢٠٢٤ كانت أول خطوة حقيقية في مشوار
              <span className="font-semibold text-blue-800">Travel </span>
              <span className="font-semibold text-amber-500">Magic</span>، ومش
              هنخبي عليكم… كانت مليانة شغل، تحديات، وفرحة بكل عميل اختار يثق
              فينا ويسافر معانا. بدأنا حلم صغير، بس كل يوم كنا بنكبر، وهدفنا
              دايمًا إننا نسهّل عليكم الحجز، ونوفرلكم أفضل عروض للفنادق بأسعار
              حقيقية من غير وجع دماغ.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              من هنا، ومن خلال الموقع ده، حابين نكون دايمًا قريبين منكم،
              ونقدملكم كل اللي تحتاجوه عشان تخططوا رحلتكم بكل راحة وسهولة – من
              أول ما تختار المكان لحد ما توصل الفندق وتبدأ رحلتك.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              احنا مؤمنين إن الشغل مش بس أرقام وتقارير… هو قصة، وعلاقتنا بيكم هي
              أهم جزء فيها.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              تابعونا، وشوفوا معانا إزاي الحلم بيكبر يوم ورا يوم
            </p>

            <p className="mt-6 text-lg font-medium text-gray-900">
              مع خالص محبتنا،
              <br />
              فريق <span className="font-semibold text-blue-800">Travel </span>
              <span className="font-semibold text-amber-500">Magic</span>
            </p>
          </MotionOrDiv>
        </div>
      </section>
      {/* End of Second Section */}

      {/* Third Section */}
      <div className="flex flex-col bg-gradient-to-r w-full p-6 items-center text-center">
        <MotionOrDiv
          initial={isDesktop ? { opacity: 0, y: 50 } : {}}
          whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
          transition={isDesktop ? { duration: 0.8 } : {}}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            رحلتنا بدأت بحلم… ولسه مكملين!
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-blue-800">Travel </span>
            <span className="font-semibold text-amber-500">Magic</span> بدأت
            بحلم بسيط: نسهل على الناس حجز الفنادق والسفر جوه مصر من غير لف ولا
            تعقيد. إحنا مجموعة شباب مؤمنين إن الرحلة الحلوة مش لازم تكون غالية،
            وهدفنا نوفرلك تجربة حجز سهلة، سريعة، وبسعر حقيقي.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            بنشتغل كل يوم علشان نكون أكبر منصة أونلاين للسياحة الداخلية في مصر…
            خطوة بخطوة، وثقة بثقة.
          </p>
        </MotionOrDiv>
      </div>
      {/* End of Third Section */}

      {/* Fourth Section */}
      <div className="w-full bg-neutral-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <MotionOrH2
            initial={isDesktop ? { opacity: 0, y: 40 } : {}}
            whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
            transition={isDesktop ? { duration: 0.6 } : {}}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          >
            إنت هتلاقي إيه مع
            <span className="font-semibold text-blue-800"> Travel </span>
            <span className="font-semibold text-amber-500">Magic</span> ؟
          </MotionOrH2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                color: "bg-[#134e8e]",
                title: "حجز فنادق ومنتجعات",
                desc: "بنساعدك تحجز في أفضل فنادق مصر بأسعار واضحة ومن غير لف ولا مفاجآت",
              },
              {
                color: "bg-amber-500",
                title: "شهر عسل على مزاجك",
                desc: "لو عرسان، وفرنالك خطط جاهزة لشهر عسل مميز في شرم أو دهب أو الغردقة، بأسعار تناسب كل الميزانيات",
              },
              {
                color: "bg-[#134e8e]",
                title: "تواصل سهل… دعم سريع",
                desc: "كل استفسار هتلاقيه ليه رد واضح وسريع على طول… من غير تعقيد",
              },
              {
                color: "bg-amber-500",
                title: "الشفافيه أسلوبنا",
                desc: "كل حاجة بنقولها واضحة من الأول: السعر، التفاصيل، والشروط… من غير مفاجآت ولا كلام صغير في الهامش",
              },
            ].map((item, i) => (
              <MotionOrDiv
                key={i}
                initial={isDesktop ? { opacity: 0, y: 40 } : {}}
                whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
                transition={isDesktop ? { duration: 0.6, delay: i * 0.2 } : {}}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-4`}
                ></div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </MotionOrDiv>
            ))}
          </div>
        </div>
      </div>
      {/* End of Fourth Section */}
    </main>
  );
};

export default MainPage;
