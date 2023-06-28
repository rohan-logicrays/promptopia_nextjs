import Feed from '@components/Feed';

const home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc-center">
        Promptopia is a open-source AI prompting tool for modern world to
        discover,share and create creative prompts
      </p>
      <Feed/>
    </section>
  );
};

export default home;
