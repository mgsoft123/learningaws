'use strict';

module.exports.handler = (event, context, callback) => {
	   const response ={
		   statusCode: 200,
		   body: JSON.stringify({
			   message: 'Delete article.'
		   }),
	   };
	   callback(null,response);
	 };

