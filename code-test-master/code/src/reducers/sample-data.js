//Author Ram Date: 7/10/2018
//Local JSON data provided
import React from 'react';

const companyData = `{
	"companyInfo": {
		"companyName": "Carter - Jackson",
		"companyMotto": "mission-critical mesh supply-chains",
		"companyEst": "2016-05-21T10:34:57.911Z"
	},
	"employees": [{
		"id": "e3eef2f8-51c3-468e-ace1-e9ab31c89107",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hai_ninh_nguyen/128.jpg",
		"firstName": "Samantha",
		"lastName": "Koss",
		"jobTitle": "Lead Web Executive",
		"age": 31,
		"bio": "Molestiae excepturi maiores. Culpa beatae aut ipsum pariatur sint sint suscipit aspernatur occaecati. Ad id et quaerat delectus est debitis dolores sit. Ad alias voluptas dolore culpa ea. Enim laudantium iure est eos.",
		"dateJoined": "2018-01-17T16:55:10.580Z"
	}, {
		"id": "0afa0a7c-fc70-4f25-8b0f-b2b40de05af0",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bereto/128.jpg",
		"firstName": "Taylor",
		"lastName": "Kuhlman",
		"jobTitle": "Corporate Intranet Administrator",
		"age": 36,
		"bio": "Rerum magni iste. Eos minus nihil molestiae et porro veniam aut tempore. Tempore vel consequatur ut maiores sit. Consequatur doloremque exercitationem iusto qui et non adipisci. Eius quia aliquid.",
		"dateJoined": "2018-01-11T11:36:16.187Z"
	}, {
		"id": "a6e40190-d723-432d-8b94-d10d53b466d3",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/_dwite_/128.jpg",
		"firstName": "Andrew",
		"lastName": "Wolf",
		"jobTitle": "Forward Data Administrator",
		"age": 20,
		"bio": "Id earum voluptatem sed ullam qui. Accusantium accusantium eligendi itaque est dolor rem. Ad quas nihil cumque enim consectetur sint magni. Blanditiis corrupti qui deserunt ad.",
		"dateJoined": "2016-01-22T13:54:41.863Z"
	}, {
		"id": "ef7323cc-2d9a-4f52-9a60-f0274959900f",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/joshuaraichur/128.jpg",
		"firstName": "Lara",
		"lastName": "Leannon",
		"jobTitle": "Senior Integration Manager",
		"age": 50,
		"bio": "Corrupti adipisci nihil. Culpa ipsam temporibus. Consequuntur laborum nulla quisquam sit dolore et culpa perspiciatis. Dolorem excepturi occaecati consequuntur sunt. Odio non vel. Et sapiente quos blanditiis incidunt nihil eos.",
		"dateJoined": "2014-11-19T17:00:31.543Z"
	}, {
		"id": "74c47b9d-72fd-4f10-956f-fa15e311d79e",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/brenton_clarke/128.jpg",
		"firstName": "Jessica",
		"lastName": "Davis",
		"jobTitle": "Central Paradigm Strategist",
		"age": 20,
		"bio": "Possimus rerum porro minima facilis doloribus voluptate fuga occaecati aperiam. Vitae similique est commodi. Enim et amet ex ipsam ut.",
		"dateJoined": "2017-09-02T10:05:46.442Z"
	}, {
		"id": "3108fe48-442b-4447-bd22-1489a5f75a3f",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/myastro/128.jpg",
		"firstName": "Cody",
		"lastName": "Heaney",
		"jobTitle": "Future Assurance Architect",
		"age": 45,
		"bio": "Quas est error velit sed earum repellendus qui omnis. Nihil ipsum atque expedita nihil deserunt neque natus cupiditate. Odit ratione minus perspiciatis incidunt. Doloribus doloribus sunt iusto praesentium ex nemo blanditiis natus. Repudiandae ea totam nobis nihil. Consectetur sed dolor aut necessitatibus sed tempora fuga.",
		"dateJoined": "2018-08-29T21:35:50.965Z"
	}, {
		"id": "8b48d6c3-c1cf-418f-8391-03ada81fa5e6",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hellofeverrrr/128.jpg",
		"firstName": "Jade",
		"lastName": "Young",
		"jobTitle": "Chief Factors Liaison",
		"age": 52,
		"bio": "Molestias ex sit quae. Laudantium odio porro iusto ut modi sed aut. Quo unde et hic et cum.",
		"dateJoined": "2010-05-12T19:32:01.225Z"
	}, {
		"id": "bbe7ee6f-b665-40f6-93d4-46b470aae0bc",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ahmadajmi/128.jpg",
		"firstName": "Declan",
		"lastName": "Dickens",
		"jobTitle": "National Quality Assistant",
		"age": 59,
		"bio": "Quis debitis eos possimus enim architecto quidem. Magni magni cum eaque repellat ipsa. Unde tempore voluptatibus officia provident error. Natus dolore non facilis tempora consectetur nisi. Et quibusdam quibusdam. Totam et repellendus quam doloribus sit.",
		"dateJoined": "2015-11-24T05:52:13.171Z"
	}, {
		"id": "b40c7bc7-ca08-41db-bba2-fa7d36461e81",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/balintorosz/128.jpg",
		"firstName": "Archie",
		"lastName": "Walter",
		"jobTitle": "Lead Implementation Consultant",
		"age": 18,
		"bio": "Qui dicta voluptatibus magnam. Ducimus ex incidunt et saepe. Dolores consequatur facere omnis tempore impedit accusantium. Ipsum sed et maiores.",
		"dateJoined": "2011-05-23T09:27:31.557Z"
	}, {
		"id": "0c53e543-1280-4e97-9900-2f9964f823f7",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/curiousoffice/128.jpg",
		"firstName": "Hayden",
		"lastName": "Mcdermott",
		"jobTitle": "Legacy Data Representative",
		"age": 44,
		"bio": "Saepe veniam eum in quae amet dicta. Numquam soluta eligendi ut autem sit saepe fugiat et. Numquam quia eos laudantium exercitationem maiores fuga. Fugiat dolore voluptas quasi earum ut consequuntur ut labore in. Sed expedita dolores.",
		"dateJoined": "2018-06-22T20:50:15.339Z"
	}, {
		"id": "c2bf8d06-21ee-4189-a46f-62d733e09fb0",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrxloka/128.jpg",
		"firstName": "Isaac",
		"lastName": "Lockman",
		"jobTitle": "Legacy Security Orchestrator",
		"age": 30,
		"bio": "Esse assumenda est voluptatem voluptatum repellendus dolorum aut. Quod voluptatem dolor suscipit possimus. Rerum aut at voluptas vel molestias ea inventore. Quisquam iure dolorem inventore doloremque quis. Velit fuga aut cumque odit sunt et natus doloremque.",
		"dateJoined": "2015-11-18T03:29:53.289Z"
	}, {
		"id": "d37fcfe6-46f5-40e7-bd23-25a79ad8d94e",
		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/tristanlegros/128.jpg",
		"firstName": "Rose",
		"lastName": "Bauch",
		"jobTitle": "National Communications Planner",
		"age": 28,
		"bio": "Qui consequatur quia. Accusamus eos quisquam qui animi ipsam deleniti accusamus excepturi error. Mollitia asperiores autem.",
		"dateJoined": "2017-11-02T13:36:45.191Z"
	}]
}`;

export default companyData;
