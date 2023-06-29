import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text_left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a
        rem recusandae adipisci porro exercitationem iure. Illum ut consectetur
        delectus repudiandae pariatur excepturi quae temporibus, reiciendis
        natus inventore unde nobis quia magni praesentium dolor est nesciunt
        culpa recusandae sed. Assumenda modi ad cumque eius impedit. Temporibus
        tenetur, sunt sint fugiat illo distinctio beatae tempora, quaerat odit
        consequuntur asperiores omnis atque eligendi aliquid. Id animi enim
        maiores, nesciunt necessitatibus commodi nostrum sint in veritatis
        accusamus est fuga magni tenetur magnam atque eveniet laborum neque
        accusantium eum. Aliquid, sed quia incidunt, est, molestias provident
        mollitia vitae nihil ab minus autem dolorem aperiam!
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap7 glassmorphism"
      >
        <label htmlFor="">
          <span className="font-satoshi font-semibod text-base text-gray-700">
            Your AI prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="write your prompt here..."
            className="form_textarea"
            required
          ></textarea>
        </label>

        <label htmlFor="">
          <span className="font-satoshi font-semibod text-base text-gray-700">
            Tag
            <span className="font-normal"> (#product, #idea) </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            className="form_input"
            required
          />
        </label>
        <br />
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
