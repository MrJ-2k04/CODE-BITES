import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="animate fadeInLeft one">
      <section className="overflow-hidden bg-white dark:bg-black sm:grid sm:grid-cols-2 sm:items-center -mt-3 mb-6 mx-6">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 dark:text-gray-400 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="/blog"
                className="group relative inline-block focus:outline-none focus:ring"
              >
                <span className="absolute inset-0 translate-x-0 translate-y-0 bg-myOrange transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                  Read blog
                </span>
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src="../src/assets/5.jpg"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </div>
  );
};

export default Header;
