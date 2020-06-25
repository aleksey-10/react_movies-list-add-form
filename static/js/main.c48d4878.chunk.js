(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},15:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(12),s=a.n(l),r=(a(20),a(1)),c=a(14),o=a(5),d=a(6),m=a(8),u=a(7),h=(a(21),a(22),a(23),function(e){var t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:l},"IMDB"))))});h.defaultProps={description:""};var f=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(h,Object.assign({key:e.imdbId},e))})))};f.defaultProps={movies:[]};var b=a(2),v=a(3),p=a(9),g=a(10),j=(a(24),a(4)),O=a.n(j),V=Object(i.memo)((function(e){var t=e.title,a=e.value,i=e.handleOnChange,l=e.checkValidation,s=e.isValid;return n.a.createElement("div",{className:"form__item"},n.a.createElement("label",{htmlFor:"field".concat(t)},t),n.a.createElement("input",{type:"text",placeholder:"".concat(t,"..."),className:"form__input ".concat(!s&&"form__input-invalid"),id:"field".concat(t),value:a,onChange:function(e){i(t,e.target.value)},onBlur:function(){return l(t)}}),!s&&n.a.createElement("small",{className:"form__error"},"Field is invalid"))}));V.propTypes={title:O.a.string.isRequired,value:O.a.string.isRequired,handleOnChange:O.a.func.isRequired,checkValidation:O.a.func.isRequired,isValid:O.a.bool.isRequired};var M=Object(g.a)("setButton"),w=Object(g.a)("handleSubmit"),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).initState={movie:{title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},fields:{title:{isTouched:!1,isValid:!0},imgUrl:{isTouched:!1,isValid:!0},imdbUrl:{isTouched:!1,isValid:!0},imdbId:{isTouched:!1,isValid:!0}},isButtonDisabled:!0},e.state=Object(r.a)({},e.initState),e.setValue=function(t,a){e.setState((function(e){return{movie:Object(r.a)(Object(r.a)({},e.movie),{},Object(b.a)({},t,a))}})),e.state.fields[t].isTouched&&e.setValidation(t)},e.setTouched=function(t){e.setState((function(e){return{fields:Object(r.a)(Object(r.a)({},e.fields),{},Object(b.a)({},t,Object(r.a)(Object(r.a)({},e.fields[t]),{},{isTouched:!0})))}}))},e.setValidation=function(t){var a="title"===t||"imdbId"===t?Boolean(e.state.movie[t]):/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e.state.movie[t]);e.setState((function(e){return{fields:Object(r.a)(Object(r.a)({},e.fields),{},Object(b.a)({},t,{isTouched:!0,isValid:a}))}})),Object(p.a)(Object(v.a)(e),M)[M]()},Object.defineProperty(Object(v.a)(e),M,{writable:!0,value:function(){e.setState((function(e){return{isButtonDisabled:!Object.values(e.fields).every((function(e){return e.isTouched&&e.isValid}))}}))}}),Object.defineProperty(Object(v.a)(e),w,{writable:!0,value:function(t){t.preventDefault(),e.setState(Object(r.a)({},e.initState)),e.props.addMovie(e.state.movie)}}),e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("form",{className:"form",onSubmit:Object(p.a)(this,w)[w]},n.a.createElement(V,{title:"title",value:this.state.movie.title,handleOnChange:this.setValue,checkValidation:this.setValidation,isValid:this.state.fields.title.isValid}),n.a.createElement("div",{className:"form__item"},n.a.createElement("label",{htmlFor:"fieldDescription"},"Description"),n.a.createElement("textarea",{placeholder:"Description...",className:"form__textarea",id:"fieldDescription",value:this.state.movie.description,onChange:function(t){e.setValue("description",t.target.value)}})),n.a.createElement(V,{title:"imgUrl",value:this.state.movie.imgUrl,handleOnChange:this.setValue,checkValidation:this.setValidation,isValid:this.state.fields.imgUrl.isValid}),n.a.createElement(V,{title:"imdbUrl",value:this.state.movie.imdbUrl,handleOnChange:this.setValue,checkValidation:this.setValidation,isValid:this.state.fields.imdbUrl.isValid}),n.a.createElement(V,{title:"imdbId",value:this.state.movie.imdbId,handleOnChange:this.setValue,checkValidation:this.setValidation,isValid:this.state.fields.imdbId.isValid}),n.a.createElement("button",{className:"form__button",type:"submit",disabled:this.state.isButtonDisabled},"Submit"))}}]),a}(i.Component),N=a(13),_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={movies:N},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(c.a)(e.movies),[Object(r.a)({},t)])}}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(f,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(E,{addMovie:this.addMovie})))}}]),a}(i.Component);s.a.render(n.a.createElement(_,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c48d4878.chunk.js.map