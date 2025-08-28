export default function About() {
  return (
    <section className="text-center sm:text-left py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg mb-8">
          I am a passionate Computer Science student and a versatile programmer with hands-on experience in a wide variety of programming languages and tools. My expertise spans across Java, C++, C#, Python, Kotlin, SQL, F#, and Golang, as well as game development using Unity and app development with Android Studio. I am proficient in both object-oriented and block-based programming paradigms. 

          I have a solid foundation in software development, problem-solving, and collaborating in team environments. My goal is to apply my technical skills and knowledge in a dynamic internship or full-time software engineering role. I am also fluent in both English and Spanish, which helps me adapt to diverse work environments and communicate effectively.
        </p>

        {/* my Image */}
        <div className="mx-auto">
          <img src="path/to/your/photo.jpg"  className="w-32 h-32 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
}
