import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        reiciendis modi, asperiores porro quod similique, ipsum quaerat
        voluptate sapiente iste incidunt est cupiditate esse vel nisi! Et
        asperiores obcaecati reprehenderit assumenda quam possimus veritatis
        vel, quis, sequi ipsam odio! Vel eveniet quia tempore debitis aliquid
        culpa ipsam expedita quod architecto?
      </p>

      <Feed />
    </section>
  );
};

export default Home;
