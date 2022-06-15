"use strict";!function(){const e=document.querySelector(".todo-list"),s=e.querySelector(".todo-list__list"),a=[{task:"delectus aut autem",message:"laboriosam mollitia et enim quasi adipisci quia provident illum",checked:!1},{task:"quo laboriosam deleniti aut qui",checked:!1},{task:"laboriosam mollitia et enim quasi adipisci quia provident illum",checked:!0},{task:"repellendus sunt dolores architecto voluptatum",message:"accusamus eos facilis sint et aut voluptatem",checked:!1},{task:"repellendus sunt dolores architecto voluptatum",message:"accusamus eos facilis sint et aut voluptatem",checked:!1},{task:"repellendus sunt dolores architecto voluptatum",message:"accusamus eos facilis sint et aut voluptatem",checked:!1},{task:"repellendus sunt dolores architecto voluptatum",message:"accusamus eos facilis sint et aut voluptatem",checked:!1},{task:"repellendus sunt dolores architecto voluptatum",message:"accusamus eos facilis sint et aut voluptatem",checked:!1},{task:"repellendus sunt dolores architecto voluptatum",message:"accusamus eos facilis sint et aut voluptatem",checked:!1},{task:"repellendus sunt dolores architecto voluptatum",message:"accusamus eos facilis sint et aut voluptatem",checked:!1},{task:"repellendus sunt dolores architecto voluptatum",message:"accusamus eos facilis sint et aut voluptatem",checked:!1}];function c(t,s){let a="";for(let e=0;e<t.length;e++)a+=`
        <li>
        <input class="visually-hidden" type="checkbox" name="todo" id="todo_${e}"${t[e].checked?"checked":""}>
        <label for="todo_${e}">
          <span>${t[e].task}</span>
          <span>${t[e].message}</span>
        </label>
      </li>
        `,s.innerHTML=a}s.addEventListener("change",e=>{let t=e.target.getAttribute("id");e=new RegExp("todo_","g"),e=+t.replace(e,"");a[e].checked=!a[e].checked,c(a,s)}),c(a,s)}();
//# sourceMappingURL=script.js.map
