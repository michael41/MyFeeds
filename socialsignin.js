// JavaScript Document

//jQuery ---------------------------------------------------------------------------------------------------------------------

$(document).ready(function(){

    //-------------------  GENERAL -----------------------------------------
    //Depending on what checkbox button has been selected, show or hide the relevant feed
	
	$('input:checkbox[name="rssfeed"]').change(
	
    function(){
		
		
        //non custom feeds : 
		if ($(this).is(':checked') && $(this).val() == 'bbc_tech') 
		{
		$(".yk_feednamelink:contains(BBC)").parentsUntil(".yk_rss_feeds_section").parent().show();
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')});		
        }
		else if (!$(this).is(':checked') && $(this).val() == 'bbc_tech')
		{
		$(".yk_feednamelink:contains(BBC)").parentsUntil(".yk_rss_feeds_section").parent().hide();
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')});  	
		}
		
		
		if ($(this).is(':checked') && $(this).val() == 'wired') 
		{
		$(".yk_feednamelink:contains(Wired)").parentsUntil(".yk_rss_feeds_section").parent().show();
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')});		
        }
		else if (!$(this).is(':checked') && $(this).val() == 'wired')
		{
		$(".yk_feednamelink:contains(Wired)").parentsUntil(".yk_rss_feeds_section").parent().hide();
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')}); 	
		}
		
		if ($(this).is(':checked') && $(this).val() == 'telegraph_and_argus') 
		{
		$(".yk_feednamelink:contains(Telegraph and Argus)").parentsUntil(".yk_rss_feeds_section").parent().show();
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')}); 			
        }
		else if (!$(this).is(':checked') && $(this).val() == 'telegraph_and_argus')
		{
		$(".yk_feednamelink:contains(Telegraph and Argus)").parentsUntil(".yk_rss_feeds_section").parent().hide();
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')}); 	
		}
		
		if ($(this).is(':checked') && $(this).val() == 'mtv_news') 
		{
		$(".yk_feednamelink:contains(MTV News)").parentsUntil(".yk_rss_feeds_section").parent().show();	
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')});		
        }
		else if (!$(this).is(':checked') && $(this).val() == 'mtv_news')
		{
		$(".yk_feednamelink:contains(MTV News)").parentsUntil(".yk_rss_feeds_section").parent().hide();	
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')});
		}
		
		if ($(this).is(':checked') && $(this).val() == 'cnn') 
		{
		$(".yk_feednamelink:contains(CNN)").parentsUntil(".yk_rss_feeds_section").parent().show();	
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')});	
        }
		else if (!$(this).is(':checked') && $(this).val() == 'cnn')
		{
		$(".yk_feednamelink:contains(CNN)").parentsUntil(".yk_rss_feeds_section").parent().hide();
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')});	
		}
		
		if ($(this).is(':checked') && $(this).val() == 'cbs') 
		{
		$(".yk_feednamelink:contains(CBS)").parentsUntil(".yk_rss_feeds_section").parent().show();
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')}); 			
        }
		else if (!$(this).is(':checked') && $(this).val() == 'cbs')
		{
		$(".yk_feednamelink:contains(CBS)").parentsUntil(".yk_rss_feeds_section").parent().hide();
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')}); 	
		}
		
		//custom feeds 
		if ($(this).is(':checked') && $(this).val() == 'custom_feed_1_value') 
		{
		$(".yk_feed_name:contains(" + userEnteredFeedName + ")").parentsUntil(".yk_rss_feeds_section").parent().show();

		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')}); 			
        }
		else if (!$(this).is(':checked') && $(this).val() == 'custom_feed_1_value')
		{
		$(".yk_feed_name:contains(" + userEnteredFeedName + ")").parentsUntil(".yk_rss_feeds_section").parent().hide();
		$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')}); 	
		}
		
		

	});
	
	    
		
		
	    //Create variables to determine the feeds that are gone and whether the custom feed option is showing or not
		var feedgone = 0;
		var customFeedOptionShowing = false; 
		
		//Removing custom feeds using 'x' button
		$('#yk_remove_custom_feed_1').click(function(){
		$(".yk_feed_name:contains("+ userEnteredFeedName + ")").parentsUntil(".yk_rss_feeds_section").parent().hide();
		$('#yk_new_custom_feed_1').hide(function(){ifAnyOptionHasBeenRemoved();});
		feedgone++;
     	customFeed(); 
     	}); 
		
		//function which sets what to regarding enabling / disabling input areas for the custom feed:
		function customFeed() 
		{
		
				
				//If the custom feed option is set to showing, then disable input areas : 
		        if (customFeedOptionShowing == true)
					{ 					
					//disable the input areas to input data : 
					 $('#yk_type_in_feed_name_input').prop('disabled', true);
					 $('#yk_paste_in_rss_url_input').prop('disabled', true);
					 $('.yk_input_submit').prop('disabled', true); 
					 
					 //Put in new placeholders				 
					 $('#yk_type_in_feed_name_input').attr('placeholder', 'Currently, you can only add one feed');
					 $('#yk_paste_in_rss_url_input').attr('placeholder', 'Currently, you can only add one feed');
					 
					}
					//If the custom feed option is set to not showing, then enable input areas :
				    else if (customFeedOptionShowing == false)
					{ 					
					//enable the input areas to input data : 
					 $('#yk_type_in_feed_name_input').prop('disabled', false);
					 $('#yk_paste_in_rss_url_input').prop('disabled', false);
					 $('.yk_input_submit').prop('disabled', false);
					 
					 //Restore the placeholders for the enabled input areas				 
					 $('#yk_type_in_feed_name_input').attr('placeholder', 'Type your feed name');
					 $('#yk_paste_in_rss_url_input').attr('placeholder', 'Paste in your RSS url');
					 
					}
			
		}
		
		
		//Removing non custom feeds using 'x' button 
	    $('#yk_remove_bbc_tech_feed').click(function(){
		$(".yk_feednamelink:contains(BBC)").parentsUntil(".yk_rss_feeds_section").parent().hide();
		$('#yk_bbc_tech_row').hide(function(){ifAnyOptionHasBeenRemoved();});	
		feedgone++;	
		}); 
		
		$('#yk_remove_wired_feed').click(function(){
		$(".yk_feednamelink:contains(Wired)").parentsUntil(".yk_rss_feeds_section").parent().hide();
		$('#yk_wired_row').hide(function(){ifAnyOptionHasBeenRemoved();});
		feedgone++;		
		}); 
		
		$('#yk_remove_tanda_feed').click(function(){
		$(".yk_feednamelink:contains(Telegraph and Argus)").parentsUntil(".yk_rss_feeds_section").parent().hide();	
		$('#yk_tanda_row').hide(function(){ifAnyOptionHasBeenRemoved();});
		feedgone++;
		}); 
		
		$('#yk_remove_mtv_feed').click(function(){
		$(".yk_feednamelink:contains(MTV)").parentsUntil(".yk_rss_feeds_section").parent().hide();	
		$('#yk_mtv_row').hide(function(){ifAnyOptionHasBeenRemoved();});	
		feedgone++;
		});
		
		$('#yk_remove_cnn_feed').click(function(){
		$(".yk_feednamelink:contains(CNN)").parentsUntil(".yk_rss_feeds_section").parent().hide();	
		$('#yk_cnn_row').hide(function(){ifAnyOptionHasBeenRemoved();});	
		feedgone++;
		});
		
		$('#yk_remove_cbs_feed').click(function(){
		$(".yk_feednamelink:contains(CBS)").parentsUntil(".yk_rss_feeds_section").parent().hide();	
		$('#yk_cbs_row').hide(function(){ifAnyOptionHasBeenRemoved();});
		feedgone++;
		});
		
		
		//If a feed option has been removed, show the link which will enable all of the options to be restored again
		function ifAnyOptionHasBeenRemoved()
		{		
			if(feedgone > 0)
			{
				
			$('#yk_Restore').show(); 
			
			}
		}
		
		
		//Restoring all feed options : 
		$('#yk_Restore').click(function(){
			
			 //Hide the 'Restore all feeds' option : 
			 $(this).hide(); 
			 
			 //Make all the checkbox buttons checked again : 
			 $('.yk_checkbox_btns').prop('checked', true);
			 
			 //show all the non custom rss feed options :
			 $('#yk_bbc_tech_row').show();
			 $('#yk_wired_row').show();
			 $('#yk_tanda_row').show();
			 $('#yk_mtv_row').show();
			 $('#yk_cnn_row').show();
			 $('#yk_cbs_row').show();
			
			 
			 //show the relevant non custom rss feeds : 		 
			 $(".yk_feednamelink:contains(BBC)").parentsUntil(".yk_rss_feeds_section").parent().show();
			 $(".yk_feednamelink:contains(Wired)").parentsUntil(".yk_rss_feeds_section").parent().show();
			 $(".yk_feednamelink:contains(Telegraph and Argus)").parentsUntil(".yk_rss_feeds_section").parent().show();
			 $(".yk_feednamelink:contains(CBS)").parentsUntil(".yk_rss_feeds_section").parent().show();
			 $(".yk_feednamelink:contains(MTV)").parentsUntil(".yk_rss_feeds_section").parent().show();
			 $(".yk_feednamelink:contains(CNN)").parentsUntil(".yk_rss_feeds_section").parent().show();
			 
			  
			 	 
			 //show the custom rss feed option and rss feeds, only if the custom feed option is showing :
			 if (customFeedOptionShowing == true)
			 {
			 //show the custom rss feeds : 
			 $(".yk_feed_name:contains("+ userEnteredFeedName + ")").parentsUntil(".yk_rss_feeds_section").parent().show(); 	 
				 
			 $('#yk_new_custom_feed_1').show();	 
			 }
			 
			 //call the custom feed function 
			 customFeed();
			 
			 //Put the 'feedgone' variable back to 0 
			 feedgone = 0;
			  
			});
			
			
	 //Close modal button : 
	 
	 $('.yk_close_modal').click(function(){
		 
		 $('.yk_modal').fadeOut(); 
		 
		 });
		 
	 
	 	
	//-------------------RSS Feed builder -----------------------------------------


	//Creating variable where will use it so that if 6 feed have been collected, then set the height of the 2 main rows on the page. 
	
	var feedsCollected = 0; 
	
	//Get the first set of feeds using rss2json api
	function GetFeeds() {

	return $.ajax({
      				  url: 'https://api.rss2json.com/v1/api.json',
     				  method: 'GET',
        			  dataType: 'json',
       				  data: {
								rss_url: 'http://feeds.bbci.co.uk/news/technology/rss.xml?edition=uk', 
								api_key: 'dftsx3dqfqisujjnonj6k0z412fhxytq7vjpblah', // put your api key here
								order_by : 'pubDate',
								count: 30
        					},
   					 error: function(XMLHttpRequest, textStatus, errorThrown) { 
       							 alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    						 } 
				  });
	}

	//After the feeds have been got, then populate the page :
	GetFeeds().done(function (response) {
    if(response.status != 'ok'){ throw response.message; }
	var content = '';
			for
			(var i in response.items)
			{
				var item = response.items[i];

						y = 0; 
						
						for (x = 0; x < 3; x++)
						{ 
						   
						   //Add in the correct details for the appropriate feed item on the page (30 total on page) 
						   $('.yk_rss_rssname_' + x).html(response.items[y].link);
						   //Link also included for the headline = 
							$('.yk_rss_headline_' + x)
							.html("<a href='" + response.items[y].link + "' target='_blank'>" + response.items[y].title + "</a>");						
						   $('.yk_rss_image_' + x).attr("src", response.items[y].thumbnail);
						   $('.yk_rss_date_' + x).html(response.items[y].pubDate);
						   $('.yk_rss_content_' + x).html(response.items[y].description);
						   
						   //If the link contains 'cnn' or 'bbc', etc. in the url then put in the feed name and wrap it in the link, also add a class to it so ... : 
						   $(".yk_feed_name:contains(cnn)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CNN News</a>");
						   $(".yk_feed_name:contains(bbc)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>BBC Tech</a>");
						   $(".yk_feed_name:contains(wired)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>Wired</a>");
						   $(".yk_feed_name:contains(cbs)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CBS News</a>");
						   $(".yk_feed_name:contains(mtv)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>MTV News</a>");
						   $(".yk_feed_name:contains(thetelegraphandargus)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>The Telegraph and Argus</a>");
						   $(".yk_feed_name:contains(rte)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>RTE Football</a>");
				

						 y++;  
					
						 
						   
    					}
						
						
			}
			
			feedsCollected++;			
			ifAllFeedsCollected(); 

	});
	
	//Do the same thing as above for the other 5 feeds (non custom feeds) : 
	function GetFeeds2() {

	return $.ajax({
      				  url: 'https://api.rss2json.com/v1/api.json',
     				  method: 'GET',
        			  dataType: 'json',
       				  data: {
								rss_url: 'https://www.wired.com/feed/rss', 
								api_key: 'dftsx3dqfqisujjnonj6k0z412fhxytq7vjpblah', // put your api key here
								order_by : 'pubDate',
								count: 30
        					},
   					 error: function(XMLHttpRequest, textStatus, errorThrown) { 
       							 alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    						 } 
				  });
	}
		
	GetFeeds2().done(function (response) {
    if(response.status != 'ok'){ throw response.message; }
	var content = '';
			for
			(var i in response.items)
			{
				var item = response.items[i];
				
						y = 0; 

						for (x = 3; x < 6; x++)
						{ 
						   
						   //Add in the correct details for the appropriate feed item on the page (30 total on page) 
						   $('.yk_rss_rssname_' + x).html(response.items[y].link);
						   	//Link also included for the headline = 
							$('.yk_rss_headline_' + x)
							.html("<a href='" + response.items[y].link + "' target='_blank'>" + response.items[y].title + "</a>");						   						   $('.yk_rss_image_' + x).attr("src", response.items[y].thumbnail);
						   $('.yk_rss_date_' + x).html(response.items[y].pubDate);
						   $('.yk_rss_content_' + x).html(response.items[y].description);
						   
						   //If the link contains 'cnn' or 'bbc', etc. in the url then put in the feed name and wrap it in the link, also add a class to it so ... : 
						   $(".yk_feed_name:contains(cnn)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CNN News</a>");
						   $(".yk_feed_name:contains(bbc)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>BBC Tech</a>");
						   $(".yk_feed_name:contains(wired)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>Wired</a>");
						   $(".yk_feed_name:contains(cbs)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CBS News</a>");
						   $(".yk_feed_name:contains(mtv)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>MTV News</a>");
						   $(".yk_feed_name:contains(thetelegraphandargus)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>The Telegraph and Argus</a>");
						   $(".yk_feed_name:contains(rte)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>RTE Football</a>");
						   
						   y++;
						   
						   
	   
    					}
						
						
			}
			
			feedsCollected++;
			ifAllFeedsCollected(); 
			
	});

	function GetFeeds3() {

	return $.ajax({
      				  url: 'https://api.rss2json.com/v1/api.json',
     				  method: 'GET',
        			  dataType: 'json',
       				  data: {
								rss_url: 'http://www.thetelegraphandargus.co.uk/news/rss/', 
								api_key: 'dftsx3dqfqisujjnonj6k0z412fhxytq7vjpblah', // put your api key here
								order_by : 'pubDate',
								count: 30
        					},
   					 error: function(XMLHttpRequest, textStatus, errorThrown) { 
       							 alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    						 } 
				  });
	}

	GetFeeds3().done(function (response) {
    if(response.status != 'ok'){ throw response.message; }
	var content = '';
			for
			(var i in response.items)
			{
				var item = response.items[i];
				
						y = 0;

						for (x = 6; x < 9; x++)
						{ 
						   
						   //Add in the correct details for the appropriate feed item on the page (30 total on page) 
						   $('.yk_rss_rssname_' + x).html(response.items[y].link);
						   //Link also included for the headline = 
							$('.yk_rss_headline_' + x)
							.html("<a href='" + response.items[y].link + "' target='_blank'>" + response.items[y].title + "</a>");
						   $('.yk_rss_image_' + x).attr("src", response.items[y].thumbnail);
						   $('.yk_rss_date_' + x).html(response.items[y].pubDate);
						   $('.yk_rss_content_' + x).html(response.items[y].description);
						   
						   //If the link contains 'cnn' or 'bbc', etc. in the url then put in the feed name and wrap it in the link, also add a class to it so ... : 
						   $(".yk_feed_name:contains(cnn)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CNN News</a>");
						   $(".yk_feed_name:contains(bbc)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>BBC Tech</a>");
						   $(".yk_feed_name:contains(wired)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>Wired</a>");
						   $(".yk_feed_name:contains(cbs)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CBS News</a>");
						   $(".yk_feed_name:contains(mtv)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>MTV News</a>");
						   $(".yk_feed_name:contains(thetelegraphandargus)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>The Telegraph and Argus</a>");
						   $(".yk_feed_name:contains(rte)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>RTE Football</a>");		
						   
						   
						   y++;
						   
						   
						   
    					}
						
						
			}
			
			feedsCollected++;
			ifAllFeedsCollected(); 
			

	});

	function GetFeeds4() {

	return $.ajax({
      				  url: 'https://api.rss2json.com/v1/api.json',
     				  method: 'GET',
        			  dataType: 'json',
       				  data: {
								rss_url: 'http://www.mtv.com/rss/news/news_full.jhtml', 
								api_key: 'dftsx3dqfqisujjnonj6k0z412fhxytq7vjpblah', // put your api key here
								order_by : 'pubDate',
								count: 30
        					},
   					 error: function(XMLHttpRequest, textStatus, errorThrown) { 
       							 alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    						 } 
				  });
	}

	GetFeeds4().done(function (response) {
    if(response.status != 'ok'){ throw response.message; }
	var content = '';
			for
			(var i in response.items)
			{
				var item = response.items[i];
				
						y = 0;

						for (x = 9; x < 12; x++)
						{ 
						   
						   //Add in the correct details for the appropriate feed item on the page (30 total on page) 
						   $('.yk_rss_rssname_' + x).html(response.items[y].link);
						   //Link also included for the headline = 
							$('.yk_rss_headline_' + x)
							.html("<a href='" + response.items[y].link + "' target='_blank'>" + response.items[y].title + "</a>");	   

						   $('.yk_rss_image_' + x).attr("src", response.items[y].thumbnail);
						   $('.yk_rss_date_' + x).html(response.items[y].pubDate);
						   $('.yk_rss_content_' + x).html(response.items[y].description);
						   
						   //If the link contains 'cnn' or 'bbc', etc. in the url then put in the feed name and wrap it in the link, also add a class to it so ... : 
						   $(".yk_feed_name:contains(cnn)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CNN News</a>");
						   $(".yk_feed_name:contains(bbc)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>BBC Tech</a>");
						   $(".yk_feed_name:contains(wired)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>Wired</a>");
						   $(".yk_feed_name:contains(cbs)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CBS News</a>");
						   $(".yk_feed_name:contains(mtv)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>MTV News</a>");
						   $(".yk_feed_name:contains(thetelegraphandargus)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>The Telegraph and Argus</a>");
						   $(".yk_feed_name:contains(rte)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>RTE Football</a>");
				

						   y++;
					
						  
						   
    					}
						
						
						
						
			}
			
			feedsCollected++;
			ifAllFeedsCollected(); 

	});
	
	function GetFeeds5() {

	return $.ajax({
      				  url: 'https://api.rss2json.com/v1/api.json',
     				  method: 'GET',
        			  dataType: 'json',
       				  data: {
								rss_url: 'http://rss.cnn.com/rss/edition.rss', 
								api_key: 'dftsx3dqfqisujjnonj6k0z412fhxytq7vjpblah', // put your api key here
								order_by : 'pubDate',
								count: 30
        					},
   					 error: function(XMLHttpRequest, textStatus, errorThrown) { 
       							 alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    						 } 
				  });
	}

	GetFeeds5().done(function (response) {
    if(response.status != 'ok'){ throw response.message; }
	var content = '';
			for
			(var i in response.items)
			{
				var item = response.items[i];
				
						y =0;

						for (x = 12; x < 15; x++)
						{ 
						   
						   //Add in the correct details for the appropriate feed item on the page (30 total on page) 
						   $('.yk_rss_rssname_' + x).html(response.items[y].link);
						   //Link also included for the headline = 
							$('.yk_rss_headline_' + x)
							.html("<a href='" + response.items[y].link + "' target='_blank'>" + response.items[y].title + "</a>");   
						   $('.yk_rss_image_' + x).attr("src", response.items[y].thumbnail);
						   $('.yk_rss_date_' + x).html(response.items[y].pubDate);
						   $('.yk_rss_content_' + x).html(response.items[y].description);
						   
						   //If the link contains 'cnn' or 'bbc', etc. in the url then put in the feed name and wrap it in the link, also add a class to it so ... : 
						   $(".yk_feed_name:contains(cnn)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CNN News</a>");
						   $(".yk_feed_name:contains(bbc)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>BBC Tech</a>");
						   $(".yk_feed_name:contains(wired)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>Wired</a>");
						   $(".yk_feed_name:contains(cbs)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CBS News</a>");
						   $(".yk_feed_name:contains(mtv)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>MTV News</a>");
						   $(".yk_feed_name:contains(thetelegraphandargus)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>The Telegraph and Argus</a>");
						   $(".yk_feed_name:contains(rte)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>RTE Football</a>");
				

						  y++; 
					
						 
						   
    					}
						
						
						
						
			}
			
			feedsCollected++;
			ifAllFeedsCollected(); 

	});
	
	function GetFeeds6() {

	return $.ajax({
      				  url: 'https://api.rss2json.com/v1/api.json',
     				  method: 'GET',
        			  dataType: 'json',
       				  data: {
								rss_url: 'https://www.cbsnews.com/latest/rss/tech', 
								api_key: 'dftsx3dqfqisujjnonj6k0z412fhxytq7vjpblah', // put your api key here
								order_by : 'pubDate',
								count: 30
        					},
   					 error: function(XMLHttpRequest, textStatus, errorThrown) { 
       							 alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    						 } 
				  });
	}

	GetFeeds6().done(function (response) {
    if(response.status != 'ok'){ throw response.message; }
	var content = '';
			for
			(var i in response.items)
			{
				var item = response.items[i];
				
						y =0;

						for (x = 15; x < 18; x++)
						{			    
						   
						   //Add in the correct details for the appropriate feed item on the page (30 total on page) 
						   $('.yk_rss_rssname_' + x).html(response.items[y].link);
						   	//Link also included for the headline = 
							$('.yk_rss_headline_' + x)
							.html("<a href='" + response.items[y].link + "' target='_blank'>" + response.items[y].title + "</a>");	
						   $('.yk_rss_image_' + x).attr("src", response.items[y].thumbnail);
						   $('.yk_rss_date_' + x).html(response.items[y].pubDate);
						   $('.yk_rss_content_' + x).html(response.items[y].description);
						   
						   //If the link contains 'cnn' or 'bbc', etc. in the url then put in the feed name and wrap it in the link, also add a class to it so ... : 
						   $(".yk_feed_name:contains(cnn)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CNN News</a>");
						   $(".yk_feed_name:contains(bbc)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>BBC Tech</a>");
						   $(".yk_feed_name:contains(wired)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>Wired</a>");
						   $(".yk_feed_name:contains(cbs)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>CBS News</a>");
						   $(".yk_feed_name:contains(mtv)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>MTV News</a>");
						   $(".yk_feed_name:contains(thetelegraphandargus)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>The Telegraph and Argus</a>");
						   $(".yk_feed_name:contains(rte)")
						   .html("<a href='" + response.items[y].link + "' target='_blank' class='yk_feednamelink'>RTE Football</a>");
				
							

						   y++;
	
    					}
				
			}

			
			feedsCollected++; 
			ifAllFeedsCollected(); 
			 

	});
	
	
	//------------------- RSS Custom Feed builder -----------------------------------------
	
	//Create the variables needed for the user input of the rss feed and the feed name
    var userEnteredRSSFeedURL;
	var userEnteredFeedName; 

        //Add the user input to the relevant variables 
		$("#yk_paste_in_rss_url_input").keyup(function(){
            userEnteredRSSFeedURL = $(this).val();		
        });
		
		$("#yk_type_in_feed_name_input").keyup(function(){
            userEnteredFeedName = $(this).val();
       });
	   			
			
		//If the user decides to just add in predefined values (bbc football rss feed) from the modal : 
		$(".yk_enter_details_to_input_areas").on("click", function(){
      			
				
			$("#yk_type_in_feed_name_input").val('BBC Football');				
			$("#yk_paste_in_rss_url_input").val('http://feeds.bbci.co.uk/sport/football/rss.xml?edition=uk');
			
			userEnteredRSSFeedURL = $("#yk_paste_in_rss_url_input").val(); 
	  	    userEnteredFeedName = $("#yk_type_in_feed_name_input").val();

				$('.yk_modal').fadeOut();
		
				
    		});
	   
	    //After the user clicks the button to add a new feed, do the following : 
		$('.yk_input_submit').click(function(){
			
										
					//If the 'type your feed name' input area is not blank : 
					if (userEnteredFeedName == "")
					{
					//Show modal : 
					$('.yk_modal').fadeIn();
				
					}
					//If it isn't blank, then do the following (prompt for correct URL is in this else bracket)
					else
					{
		
					userEnteredRSSFeedURL = $("#yk_paste_in_rss_url_input").val(); 
					userEnteredFeedName = $("#yk_type_in_feed_name_input").val(); 	
						
					function GetFeeds7() {
		
							 return $.ajax({
										  url: 'https://api.rss2json.com/v1/api.json',
										  method: 'GET',
										  dataType: 'json',
										  data: {
													rss_url: userEnteredRSSFeedURL, 
													api_key: 'dftsx3dqfqisujjnonj6k0z412fhxytq7vjpblah', // put your api key here
													order_by : 'pubDate',
													count: 30
												},
										 error: function(XMLHttpRequest, textStatus, errorThrown) { 
													 alert("Status: " + textStatus); alert("Error: " + errorThrown); 
												} 
						   				   });
			       }

					GetFeeds7().done(function (response) {
   					if(response.status != 'ok'){ throw response.message; }
		
					var content = '';
					for
					(var i in response.items)
					{
						var item = response.items[i];
						
								y =0;
		
								for (x = 0; x < 3; x++)
								{			    
								   
								   //Add in the correct details for the appropriate feed item on the page (30 total on page) 
								   $('.yk_rss_CF_rssname_' + x).html(response.items[y].link);
								   $('.yk_CF_rss_image_' + x).attr("src", response.items[y].thumbnail);
								   $('.yk_rss_CF_date_' + x).html(response.items[y].pubDate);
								   $('.yk_CF_rss_content_' + x).html(response.items[y].description);
								   
								    //Creating links for the headline and the feed name = 
						  			$('.yk_rss_CF_rssname_' + x)
									.html("<a href='" + response.items[y].link + "' target='_blank'>" + userEnteredFeedName + "</a>");
									$('.yk_CF_rss_headline_' + x)
									.html("<a href='" + response.items[y].link + "' target='_blank'>" + response.items[y].title + "</a>");
								   
								   
								
									//$('.yk_CF_feed_name').html(userEnteredFeedName); 
									
								   y++; 
							
								   
								 
								   
								}
								
								
					}
	
			feedsCollected++;
			ifAllFeedsCollected();
			
	});
	
					//Prompt message for correct URL to be inputted into new feed input area : 
					
					setTimeout(function(){
					if (customFeedOptionShowing == false) {
					$("#yk_paste_in_rss_url_input").val('');
					$('.yk_modal').fadeIn(); 
    				} 
					}, 500);
					
						
					}
				
		
		});
		

	    //Function that's called to determine about the feeds collected : 
		function ifAllFeedsCollected()
		{ 
				//If 6 have been collected, then the non custom divs will be displayed : 
				if (feedsCollected == 6)
				{
				
				//Display the page now fully : 
				$('.yk_waiting_div').hide().queue(function() {
					
					$('.yk_whole_page_wrapper').show();				
					//Set the RSS Feeds section wrapper to a set height, determined by the 6 feeds that have now been collected
					$(".yk_rss_feeds_section_wrapper").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')});
					//Make the content generator section the same height as the rss feeds section wrapper
					$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')});
								
				}); 
				
		
				}
			

				//If 7 have been collected, then the custom div will now be added : 
				if (feedsCollected == 7)
				{
									
				//Set the RSS Feeds section wrapper to a set height, determined by the 7 feeds that have now been collected
				$(".yk_rss_feeds_section_wrapper").css({'height':($(".yk_rss_feeds_section_wrapper").height() + 385 + 'px')});
				//Make the content generator section the same height as the rss feeds section wrapper
				$(".yk_content_generator_section").css({'height':($(".yk_rss_feeds_section_wrapper").height()+'px')})
				.queue(function() {
						
					//Now show the custom feed
					$('.yk_custom_feed_column').show();
					
					//Now clear input fields
			 		$('#yk_type_in_feed_name_input').val(''); 
					$("#yk_paste_in_rss_url_input").val('');
					
					//Change the variable below to true for hiding / showing feed options : 					
					customFeedOptionShowing = true;	
					
					//Show the new custom feed option : 
					$('.yk_custom_feed_options').show(); 
					
					//Display the feed name in the 'Content Generator' section
					$('#yk_custom_feed_option_1').html(userEnteredFeedName);
					
		//After a custom feed has been added, disable the ability of the the checkboxes and remove buttons \\
						
					//Show all relevant rows in case they've been hidden : 
					$('.yk_remove_or_select_feed_row').show(); 	
					//Hide 'restore all feeds' option : 
					$('#yk_Restore').hide(); 				
					//Hide the checkboxes : 
					$('.yk_checkbox_btn_chosen_lbls').attr('style', 'display:none');					
					//Hide the x buttons : 
					$('.yk_remove_feed').attr('style', 'display:none');
					//Show the paragraphs : 
					$('.yk_after_custom_feed_added_options').show();
					
					    customFeed();
					
						//Show all children of the non custom feeds 
					    $('.yk_non_custom_feeds_div').find("*").show();
					
					    //CSS style tweak after new feed has been added
						$(".yk_input_filter_feeds").keyup(function(){
						 $('#yk_custom_feed_option_1').css('margin-left', '7%');
						 });
					
					});	
				
			}
	
	}

	
});


//ANGULAR ---------------------------------------------------------------------------------------------------------------------

//------------------- Filter your feeds  ----------------------------------------- 


var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.myFunc = function() {
        var myEl = angular.element( document.querySelector( '#yk_search_outside_custom_feed_options' ) );
		myEl.addClass('row');
		var myEl2 = angular.element( document.querySelector( '#yk_rss_feeds_section_parent' ) );
		myEl2.addClass('small-12');
		myEl2.addClass('columns');
};


});

app.directive('filterList', function($timeout) {
	
    return {

        link: function(scope, element, attrs) {
            
            var li = Array.prototype.slice.call(element[0].children);
            
            function filterBy(value) {
                li.forEach(function(el) {
                    el.className = el.textContent.toLowerCase().indexOf(value.toLowerCase()) !== -1 ? '' : 'ng-hide';
                });
            }
            
            scope.$watch(attrs.filterList, function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    filterBy(newVal);
                }
            });
        }
		
		
    };
	
});


