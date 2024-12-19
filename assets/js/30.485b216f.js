(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{319:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"docker常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker常用命令"}},[t._v("#")]),t._v(" docker常用命令")]),t._v(" "),a("p",[a("code",[t._v("docker")]),t._v("是一门强大的虚拟化技术。目前我只能初步使用它，要做到灵活掌握"),a("code",[t._v("docker")]),t._v("，还需要持续学习....")]),t._v(" "),a("h3",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\nFROM node:8.4\nCOPY "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" /app\nWORKDIR /app\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--registry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org\nCMD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'npm'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nEXPOSE "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("FROM node:8.4：该 image 文件继承官方的 node image，冒号表示标签，这里标签是8.4，即8.4版本的 node。")]),t._v(" "),a("li",[t._v("COPY . /app：将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入 image 文件的/app目录。")]),t._v(" "),a("li",[t._v("WORKDIR /app：指定接下来的工作路径为/app。")]),t._v(" "),a("li",[t._v("RUN npm install：在/app目录下，运行npm install命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。")]),t._v(" "),a("li",[t._v("CMD ['npm','start']:执行 npm start")]),t._v(" "),a("li",[t._v("EXPOSE 3000：将容器 3000 端口暴露出来， 允许外部连接这个端口。")])]),t._v(" "),a("p",[a("code",[t._v(".dockerignore")]),t._v("与"),a("code",[t._v("gitignore")]),t._v("类似，就不细写了。")]),t._v(" "),a("h3",{attrs:{id:"项目部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目部署"}},[t._v("#")]),t._v(" 项目部署")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\ndocker build "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IMAGENAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进入到 Dockerfile 目录下 对项目按照 Dockerfile 描述的规则打包")]),t._v("\ndocker image ls "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看打包好的image")]),t._v("\ndocker container run "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IMAGE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行image 其中 -p表示端口映射 比如80:3000 那么就可以通过server ip访问到项目监听的3000端口了 -d 持久化部署 -t 名字 后面还可以直接跟 CMD 命令 比如 npm start 不过cmd一般写在Dockerfile里了")]),t._v("\ndocker container ls "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看启动的容器们")]),t._v("\ndocker stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONTAINER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 停止容器运行")]),t._v("\ndocker rmi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ImageId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除Image")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"如果容器没有正常启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果容器没有正常启动"}},[t._v("#")]),t._v(" 如果容器没有正常启动")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\ndocker ps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看已经挂掉的容器")]),t._v("\ndocker logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("container id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看启动日志")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"如果容器没有正常运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果容器没有正常运行"}},[t._v("#")]),t._v(" 如果容器没有正常运行")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\ndocker inspect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONTAINER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看运行中的容器配置")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);