//Minimalist Bootstrap Theme for JSONResume Schema by @carlvlewis
	
function Person(data) {
    var self = this;
    self.imagePath = ko.observable(data.basics.picture);
    self.name = ko.observable(data.basics.name);
    self.label = ko.observable(data.basics.label);
    self.address = ko.observable(data.basics.location.address);
    self.location = ko.observable(data.basics.location.postalCode);
    self.phone = ko.observable(data.basics.phone);
    self.website = ko.observable(data.basics.website);
    self.email = ko.observable(data.basics.email);
    self.mailto = ko.observable("mailto:"+data.basics.email);
    self.summary = ko.observable(data.basics.summary);
    
    
/**************************awards*************************/
    var profile = [];
    var profilearray = ko.observableArray(data.basics.profiles);
    
    for (var i = 0; i < profilearray().length; i++) {
        profile.push({ 
            profilename:data.basics.profiles[i].username, 
            profilelink: data.basics.profiles[i].url,
            network: "fa fa-"+data.basics.profiles[i].network
        });
    
    }
    self.profile = ko.observableArray(profile);
    

/****************education**************/
    var dat = [];
    var eduarray = ko.observableArray(data.education);
    
    for (var i = 0; i < eduarray().length; i++) {
        var edusummary = [];
        var edusumarr = ko.observableArray(data.education[i].summary);
        for (var j = 0; j < edusumarr().length; j++) {
            edusummary.push({edusum : data.education[i].summary[j]});
        }
        var educourse = [];
        var educou = ko.observableArray(data.education[i].courses);
        for (var k = 0; k < educou().length; k++) {
            educourse.push({courses : data.education[i].courses[k]});
        }
        var educoursetau = [];
        var educoutau = ko.observableArray(data.education[i].coursestaught);
        for (var m = 0; m < educoutau().length; m++) {
            educoursetau.push({coutau : data.education[i].coursestaught[m]});
        }
        var educoursedev = [];
        var educoudev = ko.observableArray(data.education[i].coursesdeveloped);
        for (var n = 0; n < educoudev().length; n++) {
            educoursedev.push({coudev : data.education[i].coursesdeveloped[n]});
        }
        var educourseper = [];
        var educouper = ko.observableArray(data.education[i].coursesprecepted);
        for (var p = 0; p < educouper().length; p++) {
            educourseper.push({couper : data.education[i].coursesprecepted[p]});
        }
        dat.push({ 
            area: data.education[i].area, 
            institution: data.education[i].institution, 
            startend: data.education[i].startDate + '-' + data.education[i].endDate,
            gpa: data.education[i].gpa, 
            recommendations: data.education[i].recommendations,
            edusummary: ko.observableArray(edusummary),
            children: ko.observableArray(educourse),
            courses_taught: ko.observableArray(educoursetau),
            courses_developed: ko.observableArray(educoursedev),
            courses_percepted: ko.observableArray(educourseper)
        });
    
    }
    self.education = ko.observableArray(dat);
    /*self.edusummary = ko.observableArray(edusummary);
    self.children = ko.observableArray(educourse);*/


/**************************work*************************/
    var work = [];
    var workarray = ko.observableArray(data.work);
    
    for (var i = 0; i < workarray().length; i++) {
        var worksummary = [];
        var worksumarr = ko.observableArray(data.work[i].highlights);
        for (var j = 0; j < worksumarr().length; j++) {
            worksummary.push({highlight : data.work[i].highlights[j]});
        }
        
        work.push({ 
            company:data.work[i].company, 
            position: data.work[i].position, 
            web: data.work[i].website,
            workstart: data.work[i].startDate + '-' + data.work[i].endDate,
            worksummary: data.work[i].summary,
            highlights: ko.observableArray(worksummary)
        });
    
    }
    self.work = ko.observableArray(work);
    
    
/**************************awards*************************/
    var awards = [];
    var awardsarray = ko.observableArray(data.awards);
    
    for (var i = 0; i < awardsarray().length; i++) {
        awards.push({ 
            title:data.awards[i].title, 
            awarder: data.awards[i].awarder, 
            awardstart: data.awards[i].date,
            awardsummary: data.awards[i].summary
        });
    
    }
    self.awards = ko.observableArray(awards);
    
    
/**************************talks*************************/
    var talks = [];
    var talksarray = ko.observableArray(data.Talks_Presentations_Workshops);
    
    for (var i = 0; i < talksarray().length; i++) {
        talks.push({ 
            talk_title: data.Talks_Presentations_Workshops[i].title, 
            talk_summary: data.Talks_Presentations_Workshops[i].summary
        });
    
    }
    self.talks = ko.observableArray(talks);
    

/**************************publishers*************************/
    var publishers = [];
    var publisherssarray = ko.observableArray(data.publications);
    
    for (var i = 0; i < publisherssarray().length; i++) {
        publishers.push({ 
            pub_name: data.publications[i].name, 
            publisher: data.publications[i].publisher,
            reldate: data.publications[i].releaseDate,
            pub_web: data.publications[i].website, 
            pub_summary: data.publications[i].summary
        });
    
    }
    self.publishers = ko.observableArray(publishers);
    
    
/**************************skills*************************/
    var skill = [];
    var skillsarray = ko.observableArray(data.skills);
    
    for (var i = 0; i < skillsarray().length; i++) {
        var key = [];
        var keyword = ko.observableArray(data.skills[i].keywords);
        for (var j = 0; j < keyword().length; j++) {
            key.push({skill_key : data.skills[i].keywords[j]});
        }
        skill.push({ 
            skill_name: data.skills[i].name, 
            level: data.skills[i].level,
            skill: ko.observableArray(key)
        });
    
    }
    self.skills = ko.observableArray(skill);    
    
    
/*************************professional affiliation*************************/
    var pros = [];
    var prosarray = ko.observableArray(data.professional_affiliations);
    
    for (var i = 0; i < prosarray().length; i++) {
        var proskey = [];
        var prokey = ko.observableArray(data.professional_affiliations[i].keywords);
        for (var j = 0; j < prokey().length; j++) {
            proskey.push({keywordpro : data.professional_affiliations[i].keywords[j]});
        }
        pros.push({ 
            profname: data.professional_affiliations[i].name, 
            proflevel: data.professional_affiliations[i].level,
            profkey: ko.observableArray(proskey)
        });
    
    }
    self.prof = ko.observableArray(pros);
    
    
/*************************interests**************************/
    var interest = [];
    var interestarray = ko.observableArray(data.interests);
    
    for (var i = 0; i < interestarray().length; i++) {
       
        interest.push({ 
            keyint: data.interests[i].keywords
        });
    
    }
    self.interest = ko.observableArray(interest);
    

/*************************community**************************/
    var community = [];
    var communityarray = ko.observableArray(data.community_and_academic_service);
    
    for (var i = 0; i < communityarray().length; i++) {
        var communitykey = [];
        var commkey = ko.observableArray(data.community_and_academic_service[i].summary);
        for (var j = 0; j < commkey().length; j++) {
            communitykey.push({commsummary : data.community_and_academic_service[i].summary[j]});
        }
        community.push({ 
            commsumm: ko.observableArray(communitykey)
        });
    
    }
    self.community = ko.observableArray(community);
    
    
/*************************references**************************/
    var references = [];
    var referencesarray = ko.observableArray(data.references);
    
    for (var i = 0; i < referencesarray().length; i++) {
       
        references.push({ 
            refname: data.references[i].name,
            reff: data.references[i].reference
        });
    
    }
    self.references = ko.observableArray(references);

    
/*************************projects**************************/
    var projects = [];
    var projectsarray = ko.observableArray(data.projects);
    
    for (var i = 0; i < projectsarray().length; i++) {
       
        projects.push({ 
            projname: data.projects[i].title,
            desc: data.projects[i].description
        });
    
    }
    self.projects = ko.observableArray(projects);
    
    
/*
    self.AddFriend = function() {
        self.Friends.push(new Person('new', 'friend'));
    };
    self.DeleteFriend = function(friend) {
        self.Friends.remove(friend);
    };*/
}

var viewModel;
var dataFromServer
$.getJSON('json/resume.json', function(data){
    dataFromServer = data;
    
});
setTimeout(function() {
    $.getJSON('json/resume.json', function(data){
        dataFromServer = data;
    });
    
    viewModel = new Person(dataFromServer);

    ko.applyBindings(viewModel);
    
}, 500);


