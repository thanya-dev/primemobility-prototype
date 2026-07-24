with open('/Users/thanya/Desktop/primemobility-prototype/src/pages/Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'ระบบช่วยให้เราจัดการฟลีทรถได้ง่ายขึ้นมาก ประหยัดเวลาและค่าใช้จ่ายได้จริง': 'The system helps us manage our vehicle fleet much more easily. It truly saves time and costs.',
    'คุณสมชาย ใจดี': 'Somchai Jaidee',
    'ผู้จัดการฝ่ายขนส่ง, บริษัท โลจิสติกส์ ไทย จำกัด': 'Transport Manager, Thai Logistics Co., Ltd.',
    'การบริการที่ครบวงจรทำให้เราเปลี่ยนผ่านไปสู่ EV ได้อย่างมั่นใจ ไร้รอยต่อ ทีมงานดูแลดีมาก': 'The comprehensive service allowed us to transition to EV with confidence and seamlessly. The team takes great care of us.',
    'คุณสมหญิง เก่งงาน': 'Somying Keng-ngan',
    'ผู้อำนวยการฝ่ายปฏิบัติการ, Green Transport Corp.': 'Operations Director, Green Transport Corp.',
    'เราสามารถติดตามสถานะรถได้แบบเรียลไทม์ และยังประหยัดต้นทุนพลังงานได้อย่างชัดเจน': 'We can track the vehicle status in real-time, and it clearly saves energy costs.',
    'คุณวิชัย รักชาติ': 'Wichai Rakchart',
    '<span className="desktop-nowrap">EV Fleet ครบวงจร</span><br className="desktop-break" /> ที่เร่งการเติบโตของธุรกิจคุณ': '<span className="desktop-nowrap">Comprehensive EV Fleet</span><br className="desktop-break" /> that accelerates your business growth',
    'ได้รับความไว้วางใจจากองค์กรชั้นนำ': 'Trusted by leading organizations',
    'เพราะทุกธุรกิจมีความต้องการที่แตกต่าง เรามีโซลูชันลีสซิ่งที่ช่วยให้ธุรกิจของคุณลงทุนได้อย่างคุ้มค่า<br />ลดต้นทุน และพร้อมเติบโตสู่อนาคต': 'Because every business has different needs, we offer leasing solutions that help your business invest cost-effectively,<br />reduce costs, and be ready to grow into the future.',
    'ยานยนต์ไฟฟ้าเชิงพาณิชย์': 'Commercial EV',
    'ครอบคลุมทั้งรถกระบะ รถบรรทุกขนาดเล็ก จนถึงรถหัวลากขนาดใหญ่ ตอบโจทย์การขนส่งทางไกลทั่วประเทศ': 'Covering everything from pickup trucks and light trucks to large trailer heads, answering the needs of long-distance transportation nationwide.',
    'รถตู้ไฟฟ้าเชิงพาณิชย์ ตอบโจทย์ทุกเป้าหมายทางธุรกิจ ทั้งในมุมรถรับส่งสำหรับองค์กรหรือดำเนินธุรกิจขนส่ง': 'Commercial electric vans that answer every business goal, whether as corporate shuttle vehicles or for transportation business.',
    'เปลี่ยนสวัสดิการรถรับส่งสำหรับ องค์กร ให้เป็น สวัสดิการเพื่อโลก ด้วยรถบัสไฟฟ้า ตอบโจทย์ทั้ง ลดต้นทุนค่าเชื้อเพลิง ส่งเสริมภาพลักษณ์ และส่งเสริมความยั่งยืน': 'Transform corporate shuttle benefits into benefits for the planet with electric buses. Answers the needs of reducing fuel costs, enhancing image, and promoting sustainability.',
    'PrimeMobility นำเสนอบริการแบบครบวงจรในแพ็กเกจเดียว เพื่อความสะดวกและประสิทธิภาพสูงสุดสำหรับธุรกิจของคุณ': 'PrimeMobility offers comprehensive services in a single package for maximum convenience and efficiency for your business.',
    'ตัวเลือกรถ EV ที่หลากหลาย ตอบโจทย์ทุกการใช้งาน': 'A wide variety of EV options to meet every usage need',
    'ดูแลครบวงจรเพื่อความอุ่นใจตลอดอายุสัญญา': 'Comprehensive care for peace of mind throughout the contract period',
    'พร้อมติดตั้งและให้คำปรึกษาเรื่องสถานีชาร์จ': 'Ready to install and provide consultation on charging stations',
    'ซอฟต์แวร์อัจฉริยะ ติดตามและวิเคราะห์ข้อมูลแบบเรียลไทม์': 'Smart software for tracking and analyzing data in real-time',
    'ประหยัดค่าใช้จ่ายด้านพลังงานและการซ่อมบำรุงในระยะยาว': 'Save on energy and maintenance costs in the long term.',
    'บริหารจัดการเส้นทางและการใช้งานรถได้อย่างคุ้มค่าสูงสุด': 'Manage routes and vehicle utilization for maximum cost-effectiveness.',
    'ลดการปล่อยก๊าซคาร์บอนและบรรลุเป้าหมายด้านสิ่งแวดล้อม': 'Reduce carbon emissions and achieve environmental goals.',
    'ตรวจสอบสถานะรถและแบตเตอรี่ได้แบบเรียลไทม์ตลอด 24 ชั่วโมง': 'Check vehicle and battery status in real-time 24/7.',
    'โซลูชันและบริการแบบครบวงจรที่ออกแบบมาเพื่อระบบฟลีท EV ของคุณ': 'Comprehensive solutions and services designed for your EV fleet system.',
    'PrimeMobility ให้บริการเช่ารถยนต์ไฟฟ้าที่มีตัวเลือกรุ่นหลากหลาย ไม่จำกัดเฉพาะผู้ผลิตหรือรุ่นใดรุ่นหนึ่ง ไม่ว่าจะเป็นรถยนต์นั่งส่วนบุคคลไปจนถึงรถบรรทุก จากทุกประเทศทั่วโลก เพื่อตอบสนองทุกความต้องการของธุรกิจคุณ': 'PrimeMobility provides electric vehicle leasing with a wide variety of models, not limited to any specific manufacturer or model. From passenger cars to trucks from all over the world, to meet all your business needs.',
    'อ่านเพิ่มเติม': 'Read More',
    'PrimeMobility พร้อมให้คำปรึกษาในการเลือกจำนวนและยี่ห้อของเครื่องชาร์จที่เหมาะสมกับความต้องการของคุณ และยังให้บริการติดตั้งโดยทีมงานผู้เชี่ยวชาญ': 'PrimeMobility is ready to provide consultation on choosing the right quantity and brand of chargers for your needs, and also provides installation services by a team of experts.',
    'PrimeMobility ใส่ใจในความปลอดภัยของคุณ จึงมีบริการประกันภัยที่ครอบคลุม และการบำรุงรักษารถยนต์เป็นประจำ เพื่อให้คุณมั่นใจได้ว่ารถยนต์ไฟฟ้าทุกคันอยู่ในสภาพพร้อมใช้งานและปลอดภัยเสมอ': 'PrimeMobility cares about your safety, so we offer comprehensive insurance and regular vehicle maintenance services to ensure that every electric vehicle is always in a ready-to-use and safe condition.',
    'ยกระดับการดำเนินงานของธุรกิจคุณด้วยระบบบริหารจัดการยานยนต์ไฟฟ้าของเรา ที่จะช่วยให้คุณบริหารจัดการยานพาหนะได้อย่างมีประสิทธิภาพ ลดต้นทุน และเพิ่มผลผลิต': 'Elevate your business operations with our EV fleet management system that will help you manage vehicles efficiently, reduce costs, and increase productivity.',
    'ความมุ่งมั่นในความเป็นเลิศทำให้เราเป็นพันธมิตรที่ได้รับความไว้วางใจสำหรับระบบฟลีทสมัยใหม่': 'Our commitment to excellence makes us a trusted partner for modern fleet systems.',
    'บริการแบบเบ็ดเสร็จตั้งแต่จัดหารถไปจนถึงระบบซอฟต์แวร์': 'Turnkey services from vehicle sourcing to software systems.',
    'ทีมงานมากประสบการณ์ที่พร้อมให้คำปรึกษาและดูแลคุณ': 'Experienced team ready to provide consultation and care for you.',
    'สามารถปรับแต่งแพ็กเกจให้เข้ากับความต้องการของธุรกิจคุณ': 'Packages can be customized to suit your business needs.',
    'ใช้ซอฟต์แวร์ล้ำสมัยในการจัดการและติดตามรถของคุณ': 'Use cutting-edge software to manage and track your vehicles.',
    'มีทีมสนับสนุนตลอดการใช้งาน พร้อมแก้ไขปัญหาอย่างรวดเร็ว': 'Support team available throughout usage, ready to solve problems quickly.',
    'ช่วยลดคาร์บอนฟุตพริ้นท์และสร้างภาพลักษณ์ที่ดีให้องค์กร': 'Helps reduce carbon footprint and build a good image for the organization.',
    'ทีมงานวิเคราะห์ความต้องการและปัญหาของธุรกิจ': 'Our team analyzes your business needs and pain points.',
    'ออกแบบโซลูชันและเลือกรถ EV ที่เหมาะสม': 'Design solutions and select suitable EV models.',
    'ส่งมอบรถ ติดตั้งอุปกรณ์ และวางระบบซอฟต์แวร์': 'Deliver vehicles, install equipment, and set up software systems.',
    'ดูแลและมอนิเตอร์สถานะผ่านระบบเรียลไทม์': 'Care and monitor status through a real-time system.',
    'วิเคราะห์ข้อมูลเพื่อลดต้นทุนอย่างต่อเนื่อง': 'Analyze data to continuously reduce costs.',
    'เสียงตอบรับและประสบการณ์จริงจากลูกค้าของเรา': 'Feedback and real experiences from our customers.',
    'โซลูชันยานยนต์ไฟฟ้าที่ปรับแต่งได้สำหรับหลากหลายภาคธุรกิจ': 'Customizable electric vehicle solutions for various business sectors.',
    'ยกระดับการกระจายสินค้าด้วยรถบรรทุกไฟฟ้าที่ประหยัดพลังงาน': 'Elevate distribution with energy-efficient electric trucks.',
    'ระบบขนส่งภายในและภายนอกโรงงานที่ช่วยลดต้นทุน': 'Internal and external factory transportation systems that help reduce costs.',
    'บริการจัดส่งสินค้าถึงมือลูกค้าที่รวดเร็วและเป็นมิตรกับสิ่งแวดล้อม': 'Fast and eco-friendly customer delivery services.',
    'รถเชิงพาณิชย์สำหรับไซต์งานก่อสร้างที่ต้องการความทรหดทนทาน': 'Commercial vehicles for construction sites that require toughness and durability.',
    'ขับเคลื่อนโครงการและนโยบายด้วยยานยนต์ไฟฟ้าแบบครบวงจร': 'Drive projects and policies with comprehensive electric vehicles.',
    'โซลูชันรถประจำตำแหน่งและรถส่วนกลางเพื่อตอบโจทย์ ESG': 'Position and pool car solutions to answer ESG goals.',
    'ข้อมูลเชิงลึกและอัปเดตข่าวสารในแวดวงยานยนต์ไฟฟ้าเชิงพาณิชย์': 'Insights and news updates in the commercial electric vehicle industry.',
    'มุ่งส่งเสริมการใช้รถยนต์ไฟฟ้าเชิงพาณิชย์ผ่านการขนส่งนักเรียนด้วยพลังงานไฟฟ้า บริษัท ไพร์มโมบิลิตี้ จำกัด สนับสนุนการเปลี่ยนมาใช้รถบัสไฟฟ้าในการให้บริการรถโรงเรียนของบริษัท มนตรีทรานสปอร์ต คอร์ปอเรชั่น จำกัด (มหาชน)': 'Aiming to promote the use of commercial electric vehicles through electric student transportation, PrimeMobility Co., Ltd. supports the transition to electric buses for school bus services of Montri Transport Corporation PCL.',
    'ไพร์มโมบิลิตี้ ร่วมกับ พานาโซนิค โฮลดิ้งส์ เตรียมเปิดตัวบริการตรวจวินิจฉัยแบตเตอรี่รถยนต์ไฟฟ้า ในประเทศไทยภายในปี 2026 บริการนี้มุ่งเน้นการยกระดับประสิทธิภาพการบำรุงรักษารถฟลีทเชิงพาณิชย์': 'PrimeMobility, in collaboration with Panasonic Holdings, prepares to launch an electric vehicle battery diagnostic service in Thailand by 2026. This service focuses on elevating the maintenance efficiency of commercial fleets.',
    'บริษัท ไพร์มโมบิลิตี้ จำกัด ได้ส่งมอบรถกระบะไฟฟ้า จำนวน 23 คัน ภายใต้แบรนด์ RIDDARA ให้กับบริษัท ท่าอากาศยานไทย จำกัด (มหาชน) เพื่อใช้เป็นรถรักษาความปลอดภัยสำหรับตรวจการณ์บริเวณรันเวย์': 'PrimeMobility Co., Ltd. has delivered 23 electric pickup trucks under the RIDDARA brand to Airports of Thailand PCL to be used as security patrol vehicles around the runway.',
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('/Users/thanya/Desktop/primemobility-prototype/src/pages/Home.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Translation done.")
