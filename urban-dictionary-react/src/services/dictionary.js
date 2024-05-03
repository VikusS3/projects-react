// const url2 = `https://api.urbandictionary.com/v0/define?term=${word}`
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa2f840eb9msh46ff1db4fb5a394p158470jsn01e9bdb3d085',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

export const searchWord = async ({word})=>{
    if(word === '') return null;

    try{
        const response = await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, options);
        const data = await response.json();
        const result = data.list
        return result;
    }catch(error){
        throw new Error('Error fetching data');
    }
}