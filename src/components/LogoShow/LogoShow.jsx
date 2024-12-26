

const LogoShow = () =>{


    const logos = [
        { name: "React", src: "/src/assets/svg/react.svg" },
        { name: "Java", src: "/src/assets/svg/java.svg" },
        { name: "javascript", src: "/src/assets/svg/javascript.svg" },
        { name: "Python", src: "/src/assets/svg/python.svg" },
        { name: "Angular", src: "/src/assets/svg/angular.svg" },
        { name: "Nodejs", src: "/src/assets/svg/nodejs.svg" },
        { name: "HTML5", src: "/src/assets/svg/html.svg" },
        { name: "CSS3", src: "/src/assets/svg/css.svg" },
        { name: "Tailwind", src: "/src/assets/svg/tailwind.svg" },
        { name: "Bootstrap", src: "/src/assets/svg/bootstrap.svg" },
        { name: "Typescript", src: "/src/assets/svg/typescript.svg" },
        { name: "Spring", src: "/src/assets/svg/spring.svg" },
        { name: "django", src: "/src/assets/svg/django.svg" },
        { name: "MongoDB", src: "/src/assets/svg/mango.svg" },
        { name: "MySQL", src: "/src/assets/svg/mysql.svg" },
        { name: "PostgreSQL", src: "/src/assets/svg/postgresql.svg" },
        { name: "azure", src: "/src/assets/svg/azure.svg" },
        { name: "aws", src: "/src/assets/svg/aws.svg" },
        { name: "salesforce", src: "/src/assets/svg/salesforce.svg" },
        { name: "Google", src: "/src/assets/svg/sap.svg" },
        { name: "Kubernet", src: "/src/assets/svg/kubernetes.svg" },
        { name: "Docker", src: "/src/assets/svg/docker.svg" },
        { name: "Flutter", src: "/src/assets/svg/flutter.svg" },
        { name: "figma", src: "/src/assets/svg/figma.svg"},

        
      ];


    return (
        <div className="w-full py-8 px-16 bg-gradient-to-r from-blue-200 ">
          <h1 className="text-center text-4xl font-extrabold mb-6">The <span className="text-blue-700">Technology</span> That Drives Us
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-4 transition-transform transform hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      );
}

export default LogoShow;