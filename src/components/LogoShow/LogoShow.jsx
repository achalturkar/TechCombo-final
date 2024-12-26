

const LogoShow = () =>{


    const logos = [
        { name: "React", src: "/assets/svg/react.svg" },
        { name: "Java", src: "/assets/svg/java.svg" },
        { name: "javascript", src: "/assets/svg/javascript.svg" },
        { name: "Python", src: "/assets/svg/python.svg" },
        { name: "Angular", src: "/assets/svg/angular.svg" },
        { name: "Nodejs", src: "/assets/svg/nodejs.svg" },
        { name: "HTML5", src: "/assets/svg/html.svg" },
        { name: "CSS3", src: "/assets/svg/css.svg" },
        { name: "Tailwind", src: "/assets/svg/Tailwind.svg" },
        { name: "Bootstrap", src: "/assets/svg/bootstrap.svg" },
        { name: "Typescript", src: "/assets/svg/typescript.svg" },
        { name: "Spring", src: "/assets/svg/spring.svg" },
        { name: "django", src: "/assets/svg/django.svg" },
        { name: "MongoDB", src: "/assets/svg/mango.svg" },
        { name: "MySQL", src: "/assets/svg/mysql.svg" },
        { name: "PostgreSQL", src: "/assets/svg/postgresql.svg" },
        { name: "azure", src: "/assets/svg/azure.svg" },
        { name: "aws", src: "/assets/svg/aws.svg" },
        { name: "salesforce", src: "/assets/svg/salesforce.svg" },
        { name: "Google", src: "/assets/svg/sap.svg" },
        { name: "Kubernet", src: "/assets/svg/kubernetes.svg" },
        { name: "Docker", src: "/assets/svg/docker.svg" },
        { name: "Flutter", src: "/assets/svg/flutter.svg" },
        { name: "figma", src: "/assets/svg/figma.svg"},

        
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