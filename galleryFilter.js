$(function () {

  var data = [
          {
              "id": "1",
              "name": "Jamestown Community Center",
              "location": "3382 26th St. San Francisco, CA",
              "website": "https://www.jamestownsf.org/",
              "logo": "https://static1.squarespace.com/static/577e8273e4fcb5023170d88c/t/5ba96e9a7817f72d16466a8d/1539369443006",
              "phone": "(415) 647-4709",
              "email": "info@jamestownsf.org",
              "coordinates": "37.7492676,-122.419835",
              "tags": ["tutoring","education","sports and fitness","family support services","arts","youth","wellness","employment services"],
              "description": "Jamestown is a Mission District based organization serving low income youth and their families with free and affordable high quality programming and supports since 1971. We offer tutoring, academic enrichment, social/emotional support, sports, youth workforce, family support services, artivism and Afro-Latino arts education and performance."
          },
          {
              "id": "2",
              "name": "SF LGBT Center",
              "location": "1800 Market St, San Francisco, CA 94102",
              "website": "http://www.sfcenter.org/",
              "logo": "http://www.sfcenter.org/sites/default/files/new-sfc-logo-2018_1.png",
              "phone": "(415) 865-5555",
              "email": "info@sfcenter.org",
              "coordinates": "37.7716923,-122.4262184",
              "tags": ["youth","wellness","employment services","health","housing","immigration","legal","senior","social "],
              "description": "<p>The mission of the SF LGBT Center is to connect our diverse community to opportunities, resources and each other to achieve our vision of a stronger, healthier, and more equitable world for LGBTQ people and our allies.</p><p>Despite gains in social understanding and approval for LGBT people over the past several decades, members of the LGBT community continue to face both individual and systemic discrimination. The Center's critical safety net programs serve the most vulnerable members of the community –people of color, transgender, lesbian, and bisexual women, differently-abled people, youth, elders, immigrants, and low-income individuals– who often experience additional, intersecting forms of discrimination.</p><p>Today, when visitors arrive at the Center, they will find free services such as career counseling, job fairs, a computer lab, social activities, mentorships, youth meals, and various workshops. Here LGBTQ people can connect and organize to secure our equal rights.<br/>The Center is truly the heart, home and hands of the San Francisco LGBT community.</p>"
          },
          {
              "id": "3",
              "name": "Sunset Neighborhood Beacon Center (SNBC)",
              "location": "3925 Noriega Street, San Francisco, CA 94122",
              "website": "https://www.snbc.org",
              "logo": "https://www.snbc.org/images/logo_V2_header_snbc_color.jpg",
              "phone": "(415) 755-2342",
              "coordinates": "37.7526958,-122.5080134",
              "tags": ["education","family support services","arts","youth","wellness","social ","food"],
              "description": "<p>The Sunset Neighborhood Beacon Center (SNBC) is a community-based organization serving San Francisco&rsquo;s Sunset District. SNBC provides supports and opportunities to ensure the healthy development of children, youth, and adults. Since 1996 we have connected people to their passion, potential, and community.</p><p>Every day, SNBC offers numerous high quality, free programs to 1,200 youth and adults on San Francisco&rsquo;s west side. Our programs include:</p><ul><li>Afterschool Programs</li><li>Computer Technology Programs</li><li>Skill-building Classes for Adults</li><li>Comprehensive Summer Program</li><li>Family Support Services</li><li>Events and Celebrations</li></ul><p>SNBC&rsquo;s mission and purpose are rooted in our belief that healthy, educated residents are better able to contribute to the long-term success of their community.</p></div>"
          },
          {
              "id": "4",
              "name": "Ella Hill Hutch Community Center",
              "location": "1050 McAllister Street, San Francisco, CA 94115 ",
              "website": "http://www.collectiveimpact.org/ella-hill-hutch.html",
              "logo": "http://www.collectiveimpact.org/uploads/1/1/0/5/110527041/published/collectivelogo1.png",
              "email": "info@momagic.org",
              "coordinates": "37.7792123,-122.4316602",
              "tags": ["youth","wellness","gym","playground","garden","classroom and meeting space","computer lab","tennis courts"],
              "description": "Ella Hill Hutch Community Center opened its doors to the Western Addition area of San Francisco over 30 years ago. A full-service site, the center boasts a gymnasium, playground, community gardens, classroom space, a computer lab, and four newly resurfaced tennis courts. The tennis courts at Ella Hill Hutch Community Center are open to the public Mon through Saturday; anyone is welcome to reserve time and play on a first-come, first-served basis. In addition to being available to the general public, more than 100 Fillmore District youth during the school year, and more than 300 young people during the summer months, take regular lessons on the courts."
          },
          {
              "id": "5",
              "name": "Filipino Community Center",
              "location": "4681 Mission St, San Francisco, CA 94112",
              "website": "https://www.filipinocc.org",
              "phone": "(415) 333-6267",
              "email": "info@filipinocc.org",
              "coordinates": "37.723412,-122.4377835",
              "tags": ["family support services","wellness","employment services","immigration","legal","service referrals "],
              "description": "Founded in 2004, the Filipino Community Center is dedicated to providing a safe space where Filipino families can access services, receive support, and build community. We foster and develop community empowerment, grassroots leadership, advocacy, and organizing to address the immediate and long term issues of our communities locally, and in the Philippines."
          },
          {
              "id": "6",
              "name": "Jewish Community Center of San Francisco",
              "location": "3200 California Street, San Francisco, CA 94118",
              "website": "https://www.jccsf.org/",
              "logo": "https://shamashmedia.jccsf.org/images/web-hp/JCCSF_logo.png",
              "phone": "(415) 292-1200",
              "email": "info@jccsf.org",
              "coordinates": "37.7873782,-122.4495438",
              "tags": ["education","sports and fitness","arts","youth","wellness","health","social ","food","gym","playground","garden","classroom and meeting space"],
              "description": "The Jewish Community Center of San Francisco is the oldest Jewish center on the West Coast, providing educational, social, cultural and fitness programs to the community since 1877. Open to all, JCCSF programs and services include a 45,000 square-foot Fitness Center, world-class performances and lectures, three outstanding preschools, dance, music, ceramics and art classes for adults, Jewish education classes and workshops, holiday celebrations and more!"
          },
          {
              "id": "7",
              "name": "NoiseBridge",
              "location": "2169 Mission St, 3rd Floor, San Francisco, CA 94110",
              "website": "https://www.noisebridge.net/wiki/Noisebridge",
              "logo": "https://noisebridge.net/images/d/d0/Nb-logo-131.png",
              "coordinates": "37.7624249,-122.4214393",
              "tags": ["education","arts","social ","classroom and meeting space"],
              "description": "Noisebridge is a physical space open and welcoming to all, providing infrastructure and collaboration opportunities for anyone interested in programming, hardware, crafts, science, robotics, art, and technology. We teach, we learn, we share. With no leaders, we have one rule: 'Be excellent to each other'."
          },
          {
              "id": "8",
              "name": "The Richmond Neighborhood Center",
              "location": "741 30th Avenue, San Francisco, CA 94121",
              "website": "https://richmondsf.org",
              "logo": "https://richmondsf.org/wp-content/themes/richmond/images/logo.png",
              "phone": "(415) 751-6600",
              "email": "info@richmondsf.org",
              "coordinates": "37.7751247,-122.4920861",
              "tags": ["education","sports and fitness","family support services","arts","youth","wellness","employment services","health","senior","food","garden"],
              "description": "<p>The Richmond Neighborhood Center’s mission is to nurture a diverse urban community by developing and providing high quality youth, adult, and family programs that address critical community needs and foster respect for all people and our environment. We have been serving the Richmond District of San Francisco for over 35 years, working with over 3,000 participants each week.</p><p>At our 9 public school sites, our programs include youth employment, multicultural clubs, academic support, case management, art, recreation and more. Additionally, we offer a wide variety of community programs including nightly wellness classes, food security programs, summer camps, an urban garden, neighborhood festivals, weekend art classes and more! With programming for people of all ages, The Richmond Neighborhood Center has become a trusted epicenter in the neighborhood.</p>"
          },
          {
              "id": "9",
              "name": "BHNC Bernal Heights ",
              "location": "515 Cortland Ave, San Francisco, CA 94110",
              "website": "http://www.bhnc.org/",
              "logo": "http://nebula.wsimg.com/ddd2654ffa4597f21e0a409e5fa63f75?AccessKeyId=F59E26371C407604C159&disposition=0&alloworigin=1",
              "phone": "(415) 206-2140",
              "email": " info@bhnc.org",
              "coordinates": "37.7392371,-122.4183651",
              "tags": ["education","youth","wellness","employment services","housing","senior","food"],
              "description": "Bernal Heights Neighborhood Center (BHNC) works to preserve and enhance the ethnic, cultural, and economic diversity of Bernal Heights and surrounding neighborhoods. We promote action to build a just and equitable community for all. BHNC focuses on the needs of people with low and moderate incomes. We accomplish our mission by: developing affordable housing throughout San Francisco; providing linguistically and culturally responsive services to our community's most vulnerable adults, seniors, youth, and their families; developing leaders; and organizing and empowering our tenants, clients, members, and allies to advocate for their needs and for the needs of the community. BHNC’s Housing Program works through Bernal Heights Housing Corporation to serves this mission by working throughout the city to provide and preserve stable and affordable homes for adults with low incomes and their children, many of whom are homeless and with special needs due to mental health issues, HIV/AIDS diagnosis, and substance abuse problems."
          },
          {
              "id": "10",
              "name": "CYC Community Youth Center",
              "location": "1038 Post St, San Francisco, CA 94109",
              "website": "https://www.cycsf.org",
              "logo": "https://www.cycsf.org/wordpress/wp-content/uploads/2017/08/logo_lg.png",
              "phone": "(415) 775 - 2636",
              "email": "cyc@cycsf.org",
              "coordinates": "37.7870901,-122.4212566",
              "tags": ["education","family support services","youth","wellness","employment services","health","service referrals "],
              "description": "In 1970, community and youth leaders worked together to create a center that would serve San Francisco’s Chinatown youth who found themselves becoming involved with gangs and criminal activities. CYC currently provides programs and services under six major components – Behavioral Health, Community/School-Based Outreach, Education, Intervention, Leadership Development, and Workforce Development. With focus on low income, high need, and at-risk Asian youth and families, our comprehensive array of services include academic and college counseling, job placement and employment training, substance abuse and violence prevention education, crisis intervention and mediation, leadership development, and technology and computer training. CYC serves over 5,000 youth each year and is one of only a few agencies in San Francisco addressing the needs of a diverse population of low income, high need and at-risk Asian Pacific American, Latino and African American youth."
          },
          {
              "id": "11",
              "name": "Bayanihan Center",
              "location": "1010 Mission St, San Francisco, CA 94103",
              "website": "https://www.bayanihancc.org/",
              "logo": "https://www.bayanihancc.org/uploads/1/0/8/6/108621871/published/1396417967.png?1499277227",
              "phone": "(415) 348-8042",
              "email": "bernadette@bayanihancc.org",
              "coordinates": "37.780932,-122.4114071",
              "tags": ["education","family support services","employment services","health","housing","immigration","legal","service referrals "],
              "description": "<p>The Filipino American Development Foundation exists to strengthen the social, physical, and economic well being of the Filipino American community and the South of Market community with special attention to the underserved segments of the community.<br/>FADF's Mission will accomplish this by:<ul><li>Increasing awareness and knowledge about the Filipino American community through participation in educational and cultural programs.</li><li>Increasing access to a wide range of economic, health and social services through collaboration with existing programs and the development of culturally appropriate services.</li><li>Providing a community space to strengthen community ties, to facilitate the sharing of resources and expertise among service providers in SOMA, and to build leadership skills and the capacity of service providers to effectively provide relevant social services to the community.</li></ul></p>"
          },
          {
              "id": "12",
              "name": "Chinatown Community Dev Center",
              "location": "1525 Grant Ave, San Francisco, CA 94133",
              "website": "http://www.chinatowncdc.org/",
              "logo": "http://www.chinatowncdc.org/images/headers/ccdc.png",
              "phone": "(415) 984-1450",
              "email": "info@chinatowncdc.org",
              "coordinates": "37.8010067,-122.4100756",
              "tags": ["education","arts","youth","wellness","housing","social ","service referrals "],
              "description": "<div>The Mission of the Chinatown Community Development Center is to build community and enhance the quality of life for San Francisco residents. We are a place-based community development organization serving primarily the Chinatown neighborhood, and also serve other areas including North Beach and the Tenderloin. We are a community development organization with many roles - as neighborhood advocates, organizers and planners, and as developers and managers of affordable housing.<br/><br/>We believe in a comprehensive vision of community, a quality environment, a healthy neighborhood economy, and active voluntary associations. We are committed to the empowerment of low-income residents, diversity and coalition building, and social and economic justice.<br/>The values of respect, compassion, empowerment, and teamwork represent the core principles we stand for and believe in at Chinatown CDC. Ours is a place-based organization that treats each person with compassion and respect. We build a powerful coalition of advocates and supporters who contribute their own voices in the community. We strengthen community through teamwork and encourage people to learn, and to share ideas and knowledge across all communities and within Chinatown CDC.</div>"
          },
          {
              "id": "13",
              "name": "I.T. Bookman Community Center",
              "location": "446 Randolph Street, San Francisco, CA 94132",
              "website": "http://itbookmancenter.org/",
              "phone": "(415) 586 8020",
              "email": "info@itbookmancenter.org",
              "coordinates": "37.7145057,-122.4690367",
              "tags": ["education","wellness","senior","social ","classroom and meeting space","computer lab"],
              "description": "I.T. Bookman Community Center is a non-profit resource base for community driven programming in the Oceanview, Merced Heights, and Ingleside communities, striving to recognize and address the needs of community members through the development of sustainable programs and services."
          },
          {
              "id": "14",
              "name": "Precita Valley Community Center",
              "location": "534 Precita Ave, San Francisco, CA 94110",
              "website": "http://mncsf.org/home/precita-valley-community-center-and-family-resource-center/",
              "logo": "http://mncsf.org/home/wp-content/uploads/2015/05/mnc_logo156.png",
              "phone": "(415) 206-7756",
              "coordinates": "37.747089,-122.4121232",
              "tags": ["youth"],
              "description": "The Precita Valley Community Center is our second oldest piece of property and is located at 534 Precita Ave. The Precita Center has provided services to youth and the surrounding community since 1922, and officially became a part of Mission Neighborhood Centers in 1959. This program serves youth ages 5 – 25 with various recreational, diversion, prevention, and intervention programs."
          },
          {
              "id": "15",
              "name": "The Women's Building",
              "location": "3543 18th St #8, San Francisco, CA 94110",
              "website": "https://womensbuilding.org/",
              "logo": "https://womensbuilding.org/wp-content/uploads/2015/09/TWB_MainLogo.png",
              "phone": "(415) 431-1180",
              "email": "info@womensbuilding.org",
              "coordinates": "37.7614534,-122.4248912",
              "tags": ["tutoring","education","sports and fitness","family support services","arts","wellness","employment services","health","housing","legal","food","classroom and meeting space","computer lab","service referrals "],
              "description": "<p>The Women’s Building is a women-led community space that advocates self-determination, gender equality and social justice.</p><p>Since 1971, San Francisco Women&#8217;s Centers has represented and been guided by the belief that all women and girls have the right to safe, joyous and creative lives.</p><p>Every day at The Women&#8217;s Building:</p><ul><li>Women can take care of themselves and their families by using our social services.</li><li>The well-being of women and girls is improved by our social justice advocacy.</li><li>Community groups in our Nonprofit Hub strengthen their community work by interacting and partnering with each other in a vibrant, socially progressive and affordable space.</li></ul><p>Each year we welcome over 25,000 women and their families, connecting them with social services, community involvement opportunities, the arts, wellness and educational events.</p>"
          },
          {
              "id": "16",
              "name": "TEL HI Telegraph Hill Neighborhood Center",
              "location": "660 Lombard St, San Francisco, CA 94133",
              "website": "http://www.telhi.org/",
              "logo": "http://www.telhi.org/wp-content/themes/telhi/images/logo.png",
              "phone": "(415) 421-6443",
              "coordinates": "37.8034412,-122.4147147",
              "tags": ["education","youth","wellness","senior","social ","gym","classroom and meeting space","service referrals "],
              "description": "<p><b>TEL HI&#8217;s mission is to enhance the lives of the people in our community</b>.</p><p>We focus on meeting the needs of a culturally, linguistically, and economically diverse community with services that</p><ul><li>promote stability for families;</li><li>build skills and self-worth that allow toddlers, youth, and adults to reach for their dreams and succeed; and</li><li>support seniors in remaining vital and independent.</li></ul><p>How do we do all this? We provide a combination of free and low-cost programs, such as toddler care, preschool, after school activities, summer camp, personal development classes, senior programs, community celebrations, and the list goes on. By focusing on helping people, we make our community stronger.</p>"
          },
          {
              "id": "17",
              "name": "Booker T. Washington Community Service Center",
              "location": "800 Presidio Ave, San Francisco, California 94115",
              "website": "http://www.btwcsc.org/",
              "logo": "http://btwcsc.org/wp-content/uploads/2013/11/btwcsc_logo.png",
              "phone": "(415) 928-6596",
              "email": " info@btwcsc.org",
              "coordinates": "37.7843321,-122.4482159",
              "tags": ["education","family support services","youth","health","housing"],
              "description": "<p>Building on a reputation of service to the needs of a diverse community of rich history and culture, we focus on guiding the development of youth and young adults.</p><p>Many African American residents, no matter where in the city they currently live, have participated with Booker T services in the past and still come here. Many know the current staff. Generations of African Americans have been a part of the Booker T Community.</p><p>We continue our legacy of service to families and friends who have grown up with us and want the same for their children and grandchildren. Our reputation is well known for guiding new families and friends in our programs. Our center reflects the diversity of our City &#8211; bringing all communities together to learn, share, grow and prosper.</p>"
          },
          {
              "id": "18",
              "name": "Donaldina Cameron House",
              "location": "920 Sacramento Street, San Francisco, CA 94108",
              "website": "https://cameronhouse.org/",
              "logo": "https://cameronhouse.org/wp-content/themes/cameron-house/img/header/header-logo.png",
              "phone": "(415) 781-0401",
              "email": "info@cameronhouse.org",
              "coordinates": "37.7933175,-122.4106702",
              "tags": ["education","family support services","youth","health","senior","food","service referrals "],
              "description": "Cameron House empowers generations of Chinese American individuals and their families to fully participate in and contribute positively toward a healthy society. We put our Christian faith in action to help people learn, heal, and thrive."
          },
          {
              "id": "19",
              "name": "Good Samaritan Family Resource Center",
              "location": "1294 Potrero Avenue, San Francisco CA, 94110",
              "website": "http://goodsamfrc.org/",
              "logo": "http://goodsamfrc.org/wp-content/uploads/2018/08/GoodSam-Logo-color.png",
              "phone": "(415) 401-4253",
              "coordinates": "37.7517998,-122.4086305",
              "tags": ["family support services","youth","wellness","immigration","service referrals "],
              "description": "The Good Samaritan Family Resource Center’s mission is to help vulnerable families, including immigrant families, access needed services, develop self-sufficiency, and participate fully as members of the San Francisco community. Every day, we help striving immigrants and diverse families obtain the skills, support, and resources they need to overcome the challenges of poverty and displacement so, together, we can improve the world we share."
          },
          {
              "id": "20",
              "name": "Potrero Hill Neighborhood House",
              "location": "953 De Haro Street, San Francisco, CA 94107",
              "website": "https://www.phnhsf.org/",
              "phone": "(415) 826-8080",
              "email": " phnhsf@gmail.com",
              "coordinates": "37.7583221,-122.4028557",
              "tags": ["education","youth","wellness","classroom and meeting space"],
              "description": "Our mission at the Potrero Hill Neighborhood House is to serve those most in need from the cradle to the grave with an emphasis on youth and education. "
          },
          {
              "id": "21",
              "name": "Mission Economic Development Agency",
              "location": "2301 Mission Street Suite 301, San Francisco, CA 94110",
              "website": "https://medasf.org/",
              "logo": "http://medasf.org/redesign2/wp-content/uploads/2014/01/MEDALogo_name1.png",
              "phone": "(415) 282-3334",
              "email": "mchavarria@medasf.org",
              "coordinates": "37.7600912,-122.4209947",
              "tags": ["education","employment services","housing","classroom and meeting space","computer lab","service referrals "],
              "description": "Rooted in the Mission and focused on San Francisco, MEDA’s mission is to strengthen low- and moderate-income Latino families by promoting economic equity and social justice through asset building and community development."
          }
  ]

  var listContents = "";
  for (var i=0; i<data.length; i++) {
    listContents += "<div class='hub-item active' data-hub-id='" + data[i].id + "'>";
    listContents += data[i].logo ? "<div class='hub-image-card'>" : "<div class='hub-image-card no-img'>";
    listContents += data[i].logo ? "<img src='"+ data[i].logo +"' alt='" +data[i].name+" logo' title='" +data[i].name+"'/>" : "<h2>" + data[i].name + "</h2>";
    listContents += "</div>";
    listContents += "<div class='hub-info'>";
    listContents += "<h3>" + data[i].name + "</h3>";
    listContents += "<p>" + data[i].location + "</p>";
    listContents += "<p><a href='"+data[i].website+"' target='blank'>" + data[i].website + "</a></p>";
    listContents += data[i].phone ? "<p>" + data[i].phone + "</p>" : "";
    listContents += data[i].email ? "<p><a href='mailto:"+data[i].email+"'>"  + data[i].email + "</a></p>" : "";
    listContents += "<a href='map.html?hub="+data[i].id+"' target='blank'><button class='map-btn'>See On Map</button></a>";
    listContents += "</div>";
    listContents += "<div class='hub-tags'>Tags: ";
    for (var j=0; j<data[i].tags.length; j++) {
        listContents += "<div class='tag-badge'>" + data[i].tags[j] + '</div>';
    }
    listContents += "</div>";
    listContents += "</div>";
  };

  $('.hub-item-container').html(listContents);

  $('.hub-item-container').on('click', '.hub-image-card', function(){
    $(this).closest('.hub-item').children('.hub-info').slideToggle();
  });

  var tagArray = ["tutoring","education","sports and fitness","family support services","arts","youth","wellness","employment services","health","housing","immigration","legal","senior","social ","food","gym","playground","garden","classroom and meeting space","computer lab","tennis courts","service referrals "]
  var pillboxContents = "";
  for (var i=0; i<tagArray.length; i++) {
    pillboxContents += "<option value='"+tagArray[i]+"'>"+tagArray[i]+"</option>"
  };


  $('.pillbox').html(pillboxContents);

  $('.pillbox').select2({
    width: '65%',
  });

  $('.hub-filter-container .clear-btn').on('click', function(){
      $('.pillbox').val(null).trigger('change');
      $('.hub-item').addClass('active');
  })

  $('.pillbox').on("select2:select select2:unselect", function (e) {
    processPillBox();
  });

  function processPillBox () {
    var data = $('.pillbox').select2('data');
    if (data.length == 0) {
      $('.hub-item').addClass('active');
    } else {
      var tagFilterArray = [];
      for( var i = 0; i < data.length; i++) {
        tagFilterArray.push(data[i].text);
      }
      filterData(tagFilterArray);
    }
  }
  function findOne (arr1, arr2) {
      return arr1.some(function (item) {
          return arr2.indexOf(item) >= 0;
      });
  };

  function filterData (tagFilterArray) {
    $('.hub-item').removeClass('active');
    $('.hub-item').each(function(index, element){
      var hubId = $(element).data('hubId');
      var hubIndex;
      for (var i=0; i<data.length; i++) {
        if (data[i].id == hubId) {
          hubIndex = i;
        }
      }
      var hubTags = data[hubIndex].tags;
      if(findOne(tagFilterArray, hubTags)){
        $(element).addClass('active');
      }
    });
  }

  $('.gallery-view').on('click', '.tag-badge', function(){
    $('.pillbox').val(null).trigger('change');
    var tag = $(this).text();
    $('.pillbox').val(tag).trigger("change");
    processPillBox();
  })

  $('.expand-btn').on('click', function(){
    if($('.expand-btn').text() == "Expand Details") {
      $('.expand-btn').text('Collapse Details');
      $('.hub-info').slideDown();
    }else {
      $('.expand-btn').text('Expand Details');
      $('.hub-info').slideUp();
    }
  })

  $('.grid-btn').on('click', function(){
    $('.gallery-view').removeClass('list').addClass('grid');
    if($('.expand-btn').text() == "Expand Details") {
      $('.hub-info').hide()
    } else {
      $('.hub-info').show()
    }

  });
  $('.list-btn').on('click', function(){
    $('.hub-info').show()
    $('.gallery-view').removeClass('grid').addClass('list');
  });


});
