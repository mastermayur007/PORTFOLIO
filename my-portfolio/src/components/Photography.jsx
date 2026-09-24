import photos from "../data/photos";

function Photography() {
  return (
    <section
      id="photography"
      className="section-padding bg-slate-50"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center animate-fade-up">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Creative Side
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Photography
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Capturing nature, people, places, and moments through my lens.
          </p>

        </div>

        {/* Photo Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {photos.map((photo, index) => (
            <figure
              key={photo.id}
              className="photo-card group animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-200">

                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                  width="900"
                  height="1100"
                  className="h-[360px] w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">

                  <figcaption className="translate-y-4 p-6 text-white transition duration-500 group-hover:translate-y-0">

                    <p className="text-sm text-slate-200">
                      {photo.category}
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      {photo.title}
                    </h3>

                  </figcaption>

                </div>

              </div>

            </figure>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Photography;