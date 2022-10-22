import React, { useContext } from "react";
import { changeTheme } from "../context.jsx/Theme";
import "../style.css/About.css";

function About() {
  const { ligDar } = useContext(changeTheme);
  return (
    <div className={ligDar ? "white" : "dark"}>
      <div className="about">
        <i class="fa-solid fa-newspaper"></i>
        <span>Daily Shorts</span>
        <p>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
          assumenda perspiciatis ratione, quia dicta vel quas ullam,
          necessitatibus nam odio voluptatum non recusandae esse nemo enim
          aliquam asperiores cum. Magni deleniti eos alias nostrum fugit in
          aperiam accusantium! Minima, ad ex molestias aut placeat quo sint
          distinctio provident reprehenderit perspiciatis rerum porro iusto vero
          temporibus officia incidunt doloribus labore dolor sed, magni aliquid
          neque est quos. Rem optio quibusdam nam labore obcaecati velit, neque
          incidunt fuga asperiores repellendus eaque provident tempore dolorem
          quas sed possimus repudiandae excepturi enim amet cupiditate
          reiciendis eum doloremque! Dolores nobis tenetur laboriosam aut natus.
          Neque exercitationem earum doloremque dolor, repellat quas, minima
          debitis impedit laborum sed animi cupiditate sunt quia fugit
          repudiandae vitae corporis tempore! Labore temporibus sit omnis
          placeat voluptatum molestiae quis autem rerum, reprehenderit dolorum
          quas corporis neque, vel id pariatur dignissimos impedit quaerat
          tempora perspiciatis, accusamus eum ratione rem eveniet. Ad illo,
          incidunt sint repudiandae architecto voluptatem quos quo impedit nemo
          necessitatibus ea perferendis. Vel, nisi laboriosam consequuntur
          eligendi molestias mollitia odio? Sequi, adipisci. Aliquam quaerat a
          culpa odit voluptatum possimus natus nostrum eum dolorem eveniet vero
          animi delectus, et minima alias dolore necessitatibus in impedit qui
          temporibus veritatis dignissimos ipsum nobis fugiat. Reprehenderit,
          ducimus placeat. Velit id necessitatibus consectetur aspernatur nisi.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, harum
          assumenda. Eum vitae maxime aliquid dolorum nesciunt totam facere eius
          provident voluptatem officiis quo, expedita nostrum praesentium,
          assumenda eveniet dolor laborum ad corrupti, optio eos corporis.
          Blanditiis vero eos voluptates porro excepturi nisi, nulla dicta
          facilis adipisci repellat doloremque voluptatum.
        </p>
        <p>
          {" "}
          magni voluptates ipsa consequatur blanditiis aliquam? Pariatur a
          assumenda vitae cumque porro veniam, vero error aut blanditiis commodi
          totam voluptas obcaecati culpa repellat! Explicabo non obcaecati nulla
          cum fugit eligendi exercitationem placeat sequi nemo! Esse nobis
          facere ipsa quas dolorem, iusto modi quidem incidunt aperiam fuga
          dignissimos odit sint, deserunt illum, corrupti consectetur cum
          temporibus. Aliquam quaerat a culpa odit voluptatum possimus natus
          nostrum eum dolorem eveniet vero animi delectus, et minima alias
          dolore necessitatibus in impedit qui temporibus veritatis dignissimos
          ipsum nobis fugiat. Reprehenderit, ducimus placeat. Velit id
          necessitatibus consectetur aspernatur nisi.
        </p>
        <p>
          {" "}
          magni voluptates ipsa consequatur blanditiis aliquam? Pariatur a
          assumenda vitae cumque porro veniam, vero error aut blanditiis commodi
          totam voluptas obcaecati culpa repellat! Explicabo non obcaecati nulla
          cum fugit eligendi exercitationem placeat sequi nemo! Esse nobis
          facere ipsa quas dolorem, iusto modi quidem incidunt aperiam fuga
          dignissimos odit sint, deserunt illum, corrupti consectetur cum
          temporibus. Aliquam quaerat a culpa odit voluptatum possimus natus
          nostrum eum dolorem eveniet vero animi delectus, et minima alias
          dolore necessitatibus in impedit qui temporibus veritatis dignissimos
          ipsum nobis fugiat. Reprehenderit, ducimus placeat. Velit id
          necessitatibus consectetur aspernatur nisi.
        </p>
      </div>
    </div>
  );
}

export default About;
