export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="spacy-y-6">

            <p className="text-muted-foreground">
              Hello! My name is Charles Wyner.
              I graduated from Georgia Tech with a Bachelor's of Science in Computer Science in 2025.
              I turned to CS after a brief stint in the business school as I found myself seeking a bigger challenge in my studies.
              Computer Science was the sweet spot for me: the coursework really developed my critical thinking and problem solving skills,
              and it was exciting enough that I didn't feel overwhelmed when it got difficult.
            </p>
            <br />
            <p className="text-muted-foreground">
              Following graduation, I got a job as a Junior Software Engineer at Lead Out Software in Roswell, GA where I currently work today.
              The experience has been an amazing introduction into the industry. I've not only been able to practice writing effective algorithms,
              but I've also gotten to work first-hand on designing complex systems, a skill that con get overlooked in university.
              I've also been in charge of building production-ready API integrations, as both an inbound and outbound provider.
              And most exciting of all, I'm currently working on building the MCP server for the AI insights feature of Divvy Contracts!
            </p>

            <div className="flex flex-col  sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="resume.pdf"
                download="Charles Wyner's Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Résumé
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <img src="me.jpg" alt="Charles Wyner" />
          </div>
        </div>
      </div>
    </section>
  );
};
