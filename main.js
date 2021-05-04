

//Получить статью
function loadArticle(container, path)
{
	container.innerHTML = '';
	require(['text'], (data => {
		require([path], function(x, html) {
			console.log(html);
		});
	}));
}

//получить содержание в html формате
//returns html dom element with website content
function loadContent(container)
{
	require(['content'], (data) => {
		const list = document.createElement('ol');
		const stack = [[content, list]];

		//without recursion!
		while (stack.length > 0)
		{
			const head = stack.pop();
			const section = head[0];
			const ol = head[1];

			Object.keys(section).forEach(title => {
				const value = section[title];
				const li = document.createElement('li');
				//if it is a article
				if (typeof value === "string" || value instanceof String)
				{
					const a = document.createElement('a');
					a.innerText = title;
					a.setAttribute('href', "article.html?path=" + value);
					li.appendChild(a);
				}
				//if it is a section
				else
				{
					li.innerText = title;
					const list = document.createElement('ol');
					stack.push([value, list]);
					li.appendChild(list);
				}
				ol.appendChild(li);
			});
		}

		container.appendChild(list);
	});
}