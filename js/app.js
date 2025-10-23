/* global angular, jQuery */
(function () {
  'use strict';

  angular
    .module('lcpApp', [])
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$timeout'];

  function MainCtrl($timeout) {
    var vm = this;

    vm.navItems = [
      {
        label: 'Home',
        href: 'index.html',
        classes: 'menu-item menu-item-type-custom menu-item-object-custom'
      },
      {
        label: 'Services',
        href: 'services.html',
        classes: 'menu-item menu-item-type-custom menu-item-object-custom'
      },
      {
        label: 'About',
        href: 'about.html',
        classes: 'menu-item menu-item-type-custom menu-item-object-custom'
      },
      {
        label: 'Contact',
        href: 'contact.html',
        classes: 'menu-item contact-btn menu-item-type-custom menu-item-object-custom'
      }
    ];

    vm.services = [
      {
        href: 'https://www.londonchildrenspractice.com/services/autistic-spectrum-condition-clinic/',
        title: 'Autistic Spectrum Conditions Clinic',
        age: "3-18 years (under 4's will require a general developmental assessment from a Paediatrician)",
        category: 'Specialist Assessments & Diagnostic Services',
        description: 'A 3-part assessment is completed online or in our clinic to assess and accurately diagnose Autism Spectrum Condition. The three appointments are held with our qualified and experienced clinicians for accurate diagnosis and supportive recommendations.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/creative-child-counsellor-and-play-therapy/',
        title: 'Creative Child Counsellor & Play Therapy Sessions',
        age: '3-13 years',
        category: 'Creative Counselling',
        description: 'Our Creative Counsellors and Play Therapists use creative measures and traditional talking therapies to help children explore their feelings. Therapists help children navigate troubling experiences or focus on specific need through within relaxed, confidential sessions.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/education-psychology-assessments-for-schools/',
        title: 'Education Psychology Assessments For Schools',
        age: '6-18 years',
        category: 'Educational Psychology & Assistant Psychology',
        description: "Education Psychologists offer consultation and assessment to understand the student's needs in the classroom. Our detailed reports and recommendations help create the best learning environment for each student, complemented by additional observations and guided implementation."
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/educational-health-care-needs-assessments-for-las/',
        title: 'Educational Health Care Needs Assessments',
        age: '4-18 years',
        category: 'Speech & Language Therapy',
        description: "We offer assessments with Speech and Language Therapy, Occupational Therapy and Educational Psychology. These assessments target an understanding of a student's strengths, specific need and the best provisions for support. We work closely with Local Authorities to meet statutory timescales and obligations."
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/educational-psychology-assessments/',
        title: 'Educational Psychology Assessments',
        age: '6-18 years',
        category: 'Educational Psychology & Assistant Psychology',
        description: "Educational Psychologists assess children's literacy, numeracy and overall cognitive abilities. The assessment takes specifics of the school into consideration, evaluating how best the setting and staff can work to help the child learn and is designed to benefit and enhance children's access to education."
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/expert-witness-assessments-for-tribunals/',
        title: 'Expert Witness Assessments for Tribunals',
        age: '1-25 years',
        category: 'Speech & Language Therapy',
        description: 'We offer expert witness representation in tribunal proceedings. Our assessments aid in seeking an Education, Health and Care Plan. Currently we only provide assessments for Speech and Language Therapy.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/feeding-assessments/',
        title: 'Feeding Assessments',
        age: '1-15 years',
        category: 'Specialist Assessments & Diagnostic Services',
        description: 'The Feeding and Swallowing Service offers assessment and intervention for infants and children experiencing difficulty in their feeding development. Using information supplied by parents about preferred foods and typical mealtime habits, alongside observational assessment, we will assess the specific challenges for the child and recommend strategies to aid their development.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/feeding-therapy-sessions/',
        title: 'Feeding Therapy Sessions',
        age: '1-15 years',
        category: 'Speech & Language Therapy',
        description: 'Following a feeding assessment, feeding therapy sessions are used to help infants and children overcome a wide array of issues with eating, swallowing and mealtime behaviour. We provide personalised training for parent and caregiver to help families overcome these challenges around food.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/therapy-intervention-package/',
        title: 'Introductory Therapy Package',
        age: '0-18 years',
        category: 'Speech & Language Therapy',
        description: "At LCP, we recognize the importance of early intervention and consistent care. To support this philosophy within our team, we provide an 'introductory therapy package' framework for children and young people. When you book an Introductory Therapy Package, your child will be scheduled for a therapy slot with a suitable therapist, held on a weekly or fortnightly basis."
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/joint-assessments/',
        title: 'Joint Assessments',
        age: '1-21 years',
        category: 'Speech & Language Therapy',
        description: "Joint assessments take place with both Speech and Language Therapists and Occupational Therapists present. Working together, our therapists can identify underlying reasons for challenges in behaviour and communication. The assessment will be used to prepare a comprehensive report and form strategies to meet the child's needs. This may involve signposting to further professionals."
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/joint-therapy-sessions/',
        title: 'Joint Therapy Sessions',
        age: '1-25 years',
        category: 'Speech & Language Therapy',
        description: 'Joint Therapy Sessions include Speech and Language Therapists and Occupational Therapists working together to target areas of need identified in the assessment.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/local-authority-contracts/',
        title: 'Local Authority Contracts & Spot Purchasing',
        age: '0-18 years',
        category: 'Speech & Language Therapy',
        description: 'We work in close partnership with a number of Local Authorities. We are able to support Local Authorities to meet their statutory obligations, as well as embed our knowledge and experience to enhance therapeutic offerings in the community.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/occupational-therapy-assessments/',
        title: 'Occupational Therapy Assessments',
        age: '1-21 years',
        category: 'Occupational Therapy',
        description: "Our Occupational Therapy assessments evaluate a child's abilities and their needs as well as identifying barriers to attainment. A personalised support and treatment plan is then provided. We work closely with parents to establish goals and create a foundation for future therapeutic intervention. The overall goal is for children to live an enhanced, independent life."
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/occupational-therapy-assessments-for-schools/',
        title: 'Occupational Therapy Assessments For Schools',
        age: '4-18 years',
        category: 'Occupational Therapy',
        description: "Our Occupational Therapists work with teaching staff, inclusion teams and the school's SENCo to meet the occupational needs of students. Schedules of therapy are focused on the universal and targeted model of support, enabling our therapists to reach a greater number of individual students and support the implementation of whole classroom strategies."
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/occupational-therapy-sessions/',
        title: 'Occupational Therapy Sessions',
        age: '1-25 years',
        category: 'Occupational Therapy',
        description: 'Occupational Therapy sessions are personalised to address each child’s specific needs and goals. Our interventions typically involve therapeutic techniques and play-based activities aimed at improving a child’s physical, sensory, cognitive, and emotional functioning.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/paediatrician-assessments/',
        title: 'Paediatrician Assessments',
        age: '0-5 years',
        category: 'Specialist Assessments & Diagnostic Services',
        description: 'Our Paediatricians are neuro-developmental experts providing a holistic assessment of a child’s development. The assessment uses information provided by parents alongside standardised tests to identify underlying conditions, provide developmental diagnoses and recommend further interventions where necessary.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/full-or-half-day-school-therapy-intervention-packages/',
        title: 'School Based Therapy Intervention Packages',
        age: '0-18 years',
        category: 'Speech & Language Therapy',
        description: 'We offer intervention packages to schools to support you to meet statutory obligations, deliver therapy to those on the SEN register and meet their goals. We can provide intervention across the school year and will work with you to build a package suitable to the needs of your pupils.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/full-or-half-day-therapy-intervention-packages-local-authorities/',
        title: 'School Based Therapy Intervention Packages for Local Authorities',
        age: '0-18 years',
        category: 'Speech & Language Therapy',
        description: 'Working with Local Authorities we can fill gaps in provision to meet the statutory requirements of the borough. We provide services to both individual and clusters of schools. Services are provided in a condensed, cost effective way, enabling us to meet the needs of a greater number of pupils. Alongside intervention, we offer bespoke training for school and Local Authority staff.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/speech-language-therapy-and-assessments/',
        title: 'Speech & Language Assessments',
        age: '1-25 years',
        category: 'Speech & Language Therapy',
        description: "Our Speech and Language Therapists use a range of tools to assess all areas of speech, language and communication. We work closely with families to identify a child's communication needs and goals and advise on therapeutic interventions as well as providing families with strategies to support children at home."
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/speech-and-language-assessments-for-schools/',
        title: 'Speech and Language Assessments For Schools',
        age: '4-18 years',
        category: 'Speech & Language Therapy',
        description: "Our Speech and Language Therapists work closely with teaching staff to identify and deliver communication support to meet children's needs. We prepare a schedule of therapy services, including specialist, targeted and universal models for individuals, as well as whole-classroom strategies."
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/speech-and-language-therapy-interventions/',
        title: 'Speech and Language Therapy Sessions',
        age: '1-25 years',
        category: 'Speech & Language Therapy',
        description: "Speech and Language Therapy sessions target the development of a child's speech, language and communication needs. Your Therapist will collaborate with you to establish goals, develop a plan of interventions, and review progress."
      },
      {
        href: 'https://www.londonchildrenspractice.com/services/therapy-assistant-sessions/',
        title: 'Therapy Assistant Sessions',
        age: '1-25 years',
        category: 'Occupational Therapy',
        description: "Therapy Assistant sessions implement intervention plans that are developed by a supervising therapist following a child's speech and language assessment. This is an effective and efficient way to support children and families to meet their communication goals."
      }
    ];

    vm.imageCtas = [
      {
        href: 'https://www.londonchildrenspractice.com/families/',
        image: 'https://www.londonchildrenspractice.com/wp-content/uploads/2023/11/Group-747-e1700497719118.png',
        title: 'Families'
      },
      {
        href: 'https://www.londonchildrenspractice.com/school/',
        image: 'https://www.londonchildrenspractice.com/wp-content/uploads/2023/11/Group-749-e1700498052121.png',
        title: 'Schools'
      },
      {
        href: 'https://www.londonchildrenspractice.com/local-authorities/',
        image: 'https://www.londonchildrenspractice.com/wp-content/uploads/2023/11/Group-749-1.png',
        title: 'Local Authorities'
      }
    ];

    vm.values = [
      {
        image: 'https://www.londonchildrenspractice.com/wp-content/uploads/2023/11/Group-752-1.svg',
        title: 'Growth',
        description: 'We are ambitious and enjoy the process of growing, developing, and evolving. We support our service users along their path to grow and be the best version of themselves.'
      },
      {
        image: 'https://www.londonchildrenspractice.com/wp-content/uploads/2023/11/Group-753.svg',
        title: 'Collaboration',
        description: 'Great care takes teamwork. We are passionate about holistic care and working with those around our service user.'
      },
      {
        image: 'https://www.londonchildrenspractice.com/wp-content/uploads/2023/11/Group-754-1.svg',
        title: 'Diversity',
        description: 'We are proud of the diverse team we have built and we aim to have that reflected in our practice. We ensure that the support we provide is relevant to everyone’s unique selves.'
      },
      {
        image: 'https://www.londonchildrenspractice.com/wp-content/uploads/2023/11/Group-755-1.svg',
        title: 'Care',
        description: 'We strive to provide high quality care for our service users focusing on evidence based practice every step of the way. We take care of one another within our team.'
      }
    ];

    vm.jobAdverts = [
      {
        href: 'https://www.londonchildrenspractice.com/job/occupational-therapists/',
        title: 'Occupational Therapists',
        description: 'We are rapidly expanding due to the acquisition of new contracts and currently have positions available for junior and senior Paediatric Occupational Therapists.'
      },
      {
        href: 'https://www.londonchildrenspractice.com/job/speech-and-language-therapists/',
        title: 'Speech and Language Therapists',
        description: 'We have a number of exciting opportunities for junior and senior Speech and Language Therapists to work with children and young people in both clinic and school settings.'
      }
    ];

    vm.footerMenu = [
      { href: 'index.html', label: 'Home' },
      { href: 'services.html', label: 'Services' },
      { href: 'about.html', label: 'About' },
      { href: 'contact.html', label: 'Contact' }
    ];

    vm.complianceMenu = [];

    vm.socialLinks = [
      { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/lcpclinic/' },
      { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/LCPclinic/' },
      { id: 'twitter', label: 'Twitter', href: 'https://twitter.com/LCPclinic/' }
    ];

    $timeout(initialiseSlider, 0, false);

    function initialiseSlider() {
      if (!window.jQuery || !jQuery.fn || !jQuery.fn.slick) {
        $timeout(initialiseSlider, 200, false);
        return;
      }

      var $slider = jQuery('.services-slider__slider-holder');
      if (!$slider.length) {
        return;
      }

      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }

      $slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg width="56" height="49" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.19639 16.2407C4.53865 5.30883 15.1912 1.22801 27.1493 2.69628C39.1082 4.16465 54.6678 11.4639 53.3256 22.3958C51.9833 33.3276 33.6106 46.4002 21.6525 44.932C9.69437 43.4637 1.85413 27.1725 3.19639 16.2407Z" fill="#EAE4A2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M44.0254 19.5666C37.8933 19.6412 30.4542 19.7584 27.4944 19.8274C24.5349 19.8964 21.9635 19.941 21.8018 19.9321C21.6171 19.9243 22.6527 19.4193 24.0488 18.8344C25.4662 18.2289 27.0968 17.4381 27.6624 17.0773C28.531 16.5058 28.674 16.3053 28.688 15.6915C28.707 15.1348 28.5985 14.9499 28.1715 14.8038C27.3617 14.49 26.1494 14.8146 21.6762 16.4721C17.6925 17.9458 13.3031 19.2531 11.104 19.6005C9.63138 19.8452 8.9245 20.4256 9.00634 21.3401C9.0491 21.8164 9.24153 22.1686 9.5345 22.3612C9.8031 22.536 11.4684 23.1607 13.2921 23.7562C15.0931 24.3533 17.8859 25.5016 19.5192 26.2814C24.0605 28.4708 24.8719 28.8035 25.6493 28.7553C27.0213 28.6701 27.2315 27.6799 26.1391 26.5216C25.3784 25.7257 24.6481 25.2731 22.0457 23.9405L20.1191 22.9678L21.7053 22.9653C22.5796 22.9684 25.518 22.9199 28.2246 22.8476C30.9329 22.7941 39.1069 22.6694 46.3646 22.5825C46.3646 22.5825 48.0122 22.5121 47.8702 20.9239C47.7516 19.6002 46.09 19.5134 46.09 19.5134L44.0254 19.5666Z" fill="#106CB6"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><svg width="56" height="50" viewBox="0 0 56 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M52.5869 17.0189C51.2447 6.08702 40.5921 2.00619 28.634 3.47446C16.6751 4.94283 1.11546 12.2421 2.45772 23.174C3.79999 34.1059 22.1727 47.1785 34.1308 45.7102C46.089 44.242 53.9292 27.9508 52.5869 17.0189Z" fill="#EAE4A2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5048 23.5666C16.637 23.6412 24.0761 23.7584 27.0359 23.8274C29.9954 23.8965 32.5668 23.941 32.7285 23.9321C32.9132 23.9243 31.8776 23.4193 30.4815 22.8344C29.0641 22.229 27.4335 21.4381 26.8679 21.0773C25.9993 20.5058 25.8563 20.3053 25.8423 19.6915C25.8233 19.1348 25.9318 18.9499 26.3588 18.8038C27.1686 18.49 28.3809 18.8146 32.8541 20.4721C36.8378 21.9458 41.2272 23.2531 43.4264 23.6005C44.8989 23.8452 45.6058 24.4257 45.524 25.3401C45.4812 25.8164 45.2888 26.1686 44.9958 26.3612C44.7272 26.5361 43.0619 27.1607 41.2382 27.7562C39.4372 28.3533 36.6444 29.5016 35.0112 30.2814C30.4698 32.4709 29.6584 32.8035 28.881 32.7554C27.509 32.6702 27.2988 31.68 28.3912 30.5216C29.1519 29.7257 29.8822 29.2731 32.4846 27.9405L34.4112 26.9678L32.825 26.9653C31.9508 26.9684 29.0123 26.9199 26.3057 26.8476C23.5974 26.7941 15.4233 26.6694 8.16569 26.5825C8.16569 26.5825 6.51806 26.5121 6.66004 24.924C6.77864 23.6003 8.4403 23.5134 8.4403 23.5134L10.5048 23.5666Z" fill="#106CB6"/></svg></button>',
        responsive: [
          { breakpoint: 1380, settings: { slidesToShow: 3 } },
          { breakpoint: 980, settings: { slidesToShow: 2 } },
          { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
      });
    }
  }
})();


