import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col bg-slate-100 overflow-x-hidden text-left">
        <title>Mohamad Prihartono</title>
        <meta
          name="description"
          content="Mohamad Prihartono, Memulai karir sebagai seorang programer di tahun 2019 sebagai web
          developer. Belajar dari sebuah bootcamp programer bernama Jvallybootcamp"
        />
      {/* <Menu /> */}
      {/* HEADER */}
      <header className="w-full py-10 bg-gray-900 p-6 gap-4 flex flex-col relative items-start mr-auto">
        <div className="flex flex-col gap-4 md:max-w-[600px] md:mx-auto">
          <p className="text-white font-light">Hello.. Perkenalkan, Saya..</p>

          <h1 className="text-blue-400 font-bold text-7xl">
            Mohamad Prihartono
          </h1>
          <p className="text-white font-light">
            Seorang Fullstack Javascript Developer
          </p>
          <p className="text-white font-light">
            Memulai karir sebagai seorang programer di tahun 2018 sebagai web
            developer. Belajar dari sebuah bootcamp programer bernama{" "}
            <b className="text-blue-400">Jvalley Bootcamp</b>.
          </p>
          <p className="text-white font-light">
            Dalam karier sebagai programer Javascript, saya pernah dipercaya
            beberapa perusahaan di Indonesia, yaitu{" "}
            <b className="text-blue-400">PT Dutadropship</b> Sebuah Startup dibidang e-commerce{" "}
            , pernah mengerjakan Web
            Portfolio Sebagai Backend Developer <b className="text-blue-400">IDN Media</b> dan dipercaya
            oleh Partai Terbesai di Indonesia{" "}
            <b className="text-blue-400">PDI Perjuangan</b> untuk mengerjakan Backend
            Website dan Applikasi Mobile Mereka.{" "}
            dan saya juga pernah bekerja di Malaysia sebuah perusahaan yang {" "}
            bergerak di bidang Software House bernama <b className="text-blue-400">Simajji Concept</b> sebagai {" "} Backend Developer dan DevOps.
          </p>
        </div>
      </header>

      {/* BIODATA */}
      <section
        id="biodata"
        className="w-full flex flex-col p-6 gap-4 py-10 md:max-w-[600px] md:mx-auto"
      >
        <h1 className="text-blue-400 font-bold text-7xl">Biodata</h1>
        <img
          src="https://picsum.photos/seed/46/900"
          alt="Foto Mohamad Prihartono"
          className="w-full h-[250px] object-cover object-top filter grayscale"
        />
        <p className="text-gray-900 font-light">
          Saya lahir di <b className="text-blue-400">Jakarta, 28 januari 2001</b>, dibesarkan di kota bernama
          Citayam, tidak jauh dari Jakarta.
        </p>

        <p className="text-gray-900 font-light">
          Anak Terakhir dari 5 bersaudara yang diantaranya 3 laki-laki dan 2 perempuan.
        </p>

        <p className="text-gray-900 font-light">
          Setelah lulus Sekolah Menengah Tingkat Pertama, di <b className="text-blue-400"> SMP Arrahman </b>{" "}
          Depok, saya melanjutkan sekolah di <b className="text-blue-400"> SMK Arrahman </b> Depok
          , dengan jurusan Administrasi Perkantoran.
        </p>

        <p className="text-gray-900 font-light">
          Selanjutnya saya melanjutkan pendidikan ke{" "}
          <b className="text-blue-400">Universitas Nusa Mandiri </b>Depok, dengan Jurusan Teknik Informatika.
        </p>
      </section>

      <section
        id="karier"
        className="w-full flex flex-col p-6 gap-4 py-10 md:max-w-[600px] md:mx-auto"
      >
        <h1 className="text-blue-400 font-bold text-7xl">Karier</h1>
        <img
          src="https://picsum.photos/seed/460/900"
          alt="Foto Mohamad Prihartono"
          className="w-full h-[250px] object-cover object-top filter grayscale"
        />

        <h1 className="text-blue-400 font-bold text-2xl mt-6">2018 - 2022</h1>
        <p className="text-gray-900 font-light">
          Saya memulai karier saya sebagai seorang programer di tahun 2018 sebagai web developer di sebuah bootcamp bernama{" "}
          <b className="text-blue-400">Jvalley Bootcamp</b>. Setelah lulus dari bootcamp tersebut, saya langsung bekerja di sebuah startup bernama{" "}
          <b className="text-blue-400">PT Dutadropship</b> sebagai Backend Developer. dan saya pernah dipercaya oleh perusahaan bernama{" "}
          <b className="text-blue-400">IDN Media</b> untuk mengerjakan Web Portfolio mereka. Setelah itu saya pernah dipercaya oleh Partai Terbesar di Indonesia{" "}
          <b className="text-blue-400">PDI Perjuangan</b> untuk mengerjakan Backend Website dan Applikasi Mobile Mereka.{" "}

        </p>


        <h1 className="text-blue-400 font-bold text-2xl">2022 - Saat ini</h1>
        <img
          src="https://picsum.photos/seed/470/900"
          alt="Membuka Bootcamp Programer Gratis Jvalley Bootcamp"
          className="w-full h-[250px] object-cover object-top filter grayscale"
        />
        <p className="text-gray-900 font-light">
          Di tahun 2022, saya memutuskan untuk melanjutkan kuiliah, dan saya memutuskan untuk
          melanjutkan kuliah di <b className="text-blue-400">Universitas Nusa Mandiri</b> dengan jurusan
          Teknik Informatika.
        </p>
        <p className="text-gray-900 font-light">
          Selain kuliah, saya juga menjadi Freelancer di beberapa perusahaan
          seperti <b className="text-blue-400">IDN Media</b>, dan sebuah Partai Politik Terbesar di Indonesia,{" "}
          <b className="text-blue-400">PDI Perjuangan</b>.
        </p>
      </section>

      {/* SKIL SECTION  */}
      <section
        id="skill"
        className="w-full flex flex-col p-6 gap-4 py-10 md:max-w-[600px] md:mx-auto"
      >
        <h1 className="text-blue-400 font-bold text-7xl">Skill</h1>
        <h1
          className="text-blue-400 font-bold text-2xl mt-6"
          id="skill_ui_design"
        >
          UI Desain
        </h1>
        <img
          src="https://picsum.photos/seed/490/900"
          alt="Desain UI menggunakan Applikasi Figma"
          className="w-full h-[250px] object-cover object-top"
        />
        <small className="text-gray-500 text-xs italic">
          Desain UI Applikasi Mobile Hobister
        </small>
        <p className="text-gray-900 font-light">
          Background pendidikan saya yang merupakan Grafis Desain, memudahkan
          saya untuk mengimplementasikan desain UI pada sebuah applikasi
          digital.
        </p>

        <p className="text-gray-900 font-light">
          Saya terbiasa membuat sebuah prototype dengan <b className="text-blue-400">Figma</b>, sebelum
          melanjutankanya ke proses Frontend Development.
        </p>

        {/* FRONT END */}
        <h1
          className="text-blue-400 font-bold text-2xl mt-6"
          id="skill_frontend"
        >
          Frontend
        </h1>
        <p className="text-gray-900 font-light">
          Untuk Frontend Development, tentunya saya menggunakan teknologi
          Javascript, native maupun menggunakan Library atau Framework.
        </p>

        <p className="text-gray-900 font-light">
          Teknologi yang saya gunakan untuk pengembangan Web Frontend adalah :
        </p>

        <small className="text-gray-500 font-light italic font-xs">
          Silakan klik untuk detail
        </small>

        <ul className="flex flex-col">
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Express JS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Membuat Server Side Web dengan Express Js
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>React JS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Membuat Single Page Application menggunakan Library React JS,
                dan terkadang membuat Progressive Web App dengan library ini.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Next JS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Sebuah framework untuk React JS, yang mempunyai fitur server
                side rendering, untuk client yang mengedepankan fitur SEO, saya
                memilih Framework Next js ini.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Tailwind CSS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Sebuah framework CSS, yang sifatnya utility base, membuat proses
                development Frontend saya menjadi lebih cepat.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>ANT Design CSS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Untuk project project yang membutuhkan development time yang
                cepat, saya sering menggunakan ANT Design. Ant Design juga saya
                gunakan untuk membuat tampilan CMS, karena sudah menyediakan
                component component yang saya butuhkan.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Strapi Headless CMS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Strapi merupakan Framework yang fokus untuk pembuatan CMS,
                karena pembuatannya menggunakan React js, saya sangat terbantu
                ketika membuat sebuah project sederhana yang membutuhkan CMS.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Vercel Serverless</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Vercel memudahkan saya untuk tahap development applikasi web
                menggunakan teknologi Serverless, untuk project-project
                sederhana dan tidak membutuhkan resource server yang tinggi.
                Dengan fitur CICD dari vercel, proses development bisa di
                lakukan dengan cepat.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Google Firebase</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Saya menggunakan Firebase untuk kebutuhan web push notification
                dan user auth, sesekali menggunakan realtime databasenya untuk
                keperluan pengembangan applikasi web dan mobile.
              </p>
            </details>
          </li>
        </ul>

        {/* BACKEND */}
        <h1
          className="text-blue-400 font-bold text-2xl mt-6"
          id="skill_backend"
        >
          Backend
        </h1>

        <p className="text-gray-900 font-light">
          Untuk Backend, beberapa teknologi yang saya gunakan :
        </p>

        <small className="text-gray-500 font-light italic font-xs">
          Silakan klik untuk detail
        </small>

        <ul className="flex flex-col">
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Express JS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Express JS Merupakan Framework backend Javascript yang paling
                saya sukai, selain ringan dan cepat, development dengan Express
                JS juga sangat mudah.
              </p>
            </details>
          </li>
          <li>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Fastify JS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Fastify saya gunakan untuk project yang masih berkiblat kepada
                Express JS, namun membutuhkan kecepatan response data yang lebih
                cepat.
              </p>
            </details>
          </li>

          <li>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>SQL Database </h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Menggunakan SQL database seperti MYSQL, Postgre dan SQLITE untuk
                project project yang membutuhkan relational dari masing masing
                Table nya.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Non SQL Database </h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Non SQL database saya gunakan untuk project - project yang
                membutuhkan kecepatan akses databasenya, saya biasa menggunakan
                Monggo DB dan Firestore Firebase.
              </p>
            </details>
          </li>

          <li>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Version Control Github </h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Sebagai seorang programer, penting untuk kita menguasai version
                control, saya biasa menggunakan GIT dengan Platform Github,
                untuk version control dan kerja team.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Google Cloud Platform</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Sebagai seorang Fullstack Javascript Developer, menurut saya
                penting untuk kita menguasai sedikit banyak ilmu Server
                Operation, karena Node JS berjalan di runtime Operating System,
                dimana kita harus bisa setup production code di sisi server.
              </p>

              <p className="text-gray-900 font-light mt-2">
                Saya terbiasa setup server Virtual Machine dari awal, untuk
                memastikan applikasi berjalan dengan baik di server Linux.
                Distro Linux yang saya sering gunakan adalah Debian.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Web Server Nginx / Apache</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Terbiasa menangani setup web server dengan Nginx ataupun Apache
                pada server Linux.
              </p>
            </details>
          </li>

          <li>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Cloudflare</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Untuk security saya menggunakan Cloudflare sebagai masking DNS,
                selain tentunya security dari sisi code juga.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Postman</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Postman adalah applikasi untuk melakukan testing API, selain itu
                saya menggunakan postman untuk membuat dokumentasi API.
              </p>
            </details>
          </li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}