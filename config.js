var config = {
    style: 'mapbox://styles/ed1990/clevejhi6000701n0bnuwgjbm',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNsZWw1bXV1ejByem0zeGs1eDhkeTNrb3YifQ.0jrKz-cbnk3qtjktDJC2UQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:sans-serif; background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-size:1.2rem" >Mașinile învârt lumea</span>',
    subtitle: '<span style=" font-family: playfair display, serif; color:#ffffff; font-size:2.3rem" >INTERACTIV | Cum își ține România un gigant cu motorul subturat: industria auto </span>',
    byline: '<a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a> <p> <img src="./scroll.png"> </p> <p> scroll </p>',
    footer: '<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '.png',
            description: '',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'two-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Înainte de pandemie, în anul <a href="https://www.oica.net/category/production-statistics/2019-statistics/" target="_blank">2018</a>, în lume se produceau<span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> peste 71 de milioane</span> de autoturisme. Odată cu pandemia, în 2020, sectorul auto global s-a confruntat cu o serie de perturbări, ale căror efecte se resimt și azi. Am văzut, pe de-o parte, linii de producție sistate, din cauza lockdown-urilor, după care sectorul nu a putut face față cererii în revenire, pentru că a apărut o criză globală de semiconductori pentru automobile.',
            location: {
                center: [12.02595, 49.90885],
                zoom: 2,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'three-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Această lipsă de cipuri <a href="https://www.statista.com/topics/1487/automotive-industry/#:~:text=This%20chip%20shortage%20led%20to,units%20from%20production%20in%202022." target="_blank">a dus la tăierea a aproximativ</a>  <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> 11,3 milioane de vehicule </span> din planurile de producție la nivel mondial. Este cea mai mare scădere a producției din ultimul deceniu. Panorama a explicat <a href=“https://panorama.ro/criza-cipuri-semiconductori-auto-european-chips-act/”>aici </a> impactul crizei cipurilor asupra producției de mașini. ',
            location: {
                center: [19.26346, 48.03732],
                zoom: 3,
                pitch: 60,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    
        {
            id: 'four-identifier',
            alignment: 'right',
            hidden: false,
            title: 'De ce este importantă industria auto',
            image: '',
            description: 'Pentru a produce 60 de milioane de vehicule, <a href="https://www.oica.net/category/economic-contributions/" target="_blank">e nevoie de aproximativ 9 milioane de oameni</a>, care sunt angajați direct în fabricarea vehiculelor și a pieselor care intră în ele. E o forță de muncă ce reprezintă peste 5% din totalul angajării în producție din lume.',
            location: {
                center: [19.26346, 48.03732],
                zoom: 4,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'five-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Mai mult: se estimează că fiecare loc de muncă direct din industria auto susține indirect cel puțin alte 5 locuri de muncă într-o comunitate. Asta se traduce în peste 50 de milioane de locuri de muncă datorate industriei auto, potrivit <a href="https://www.oica.net/category/economic-contributions/" target="_blank">informațiilor OICA (International Organization of Motor Vehicle Manufacturers)</a>. Mulți oameni sunt angajați în producție și servicii conexe.',
            location: {
                center: [19.26346, 48.03732],
                zoom: 5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'six-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Automobilele sunt construite folosind bunuri din multe alte industrii, cum ar fi oțel, fier, aluminiu, sticlă, materiale plastice, covoare, textile, cauciuc, semiconductorii despre care vorbeam anterior și multe altele. Aceste cifre ne dau măsura puterii acestui sector în economia globală.<p> <img src="./productie masini.png"> </p>',
            location: {
                center: [19.26346, 48.03732],
                zoom: 6,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seven-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Cine ține industria auto pe roți',
            image: '',
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./china.png"></div> Când vine vorba de principalii jucători globali din industria auto, China rămâne cel mai mare producător de autoturisme din lume. În anul 2021, a produs peste 26 de milioane de vehicule cu motor, dintre care <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> peste 21 de milioane erau autoturisme.</span>  Însă majoritatea mașinilor fabricate în China sunt vândute în interiorul țării. Exporturile reprezintă puțin peste 10 procente. ',
            location: {
                center: [108.62566, 33.93662],
                zoom: 4.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Japonia, pe locul 2',
            image: '',
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./japonia.png"></div> Japonia, pe de altă parte, se clasează pe locul al doilea la producția de mașini, cu peste <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> 6.6 milioane </span> de autoturisme produse Înainte de pandemie, Toyota concura acerb cu Volkswagen la numărul de autovehicule produse.',
            location: {
                center: [138.81167, 36.48381],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nine-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/12873896/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe> <div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/12873896/?utm_source=embed&utm_campaign=visualisation/12873896" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [138.81167, 36.48381],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ten-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Situația la nivelul UE',
            image: '',
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./ue.png"></div> Prin comparație cu cele 21 de milioane de autoturisme produse de China, în UE s-au făcut <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> peste 10 milioane </span> de autoturisme în 2021. Industria auto e o forță imposibil de neglijat în Europa. 22 de state din Europa produc automobile, dintre care 16 sunt din Uniunea Europeană. <p> Doar la nivelul Uniunii Europene,  <a href="https://single-market-economy.ec.europa.eu/sectors/automotive-industry_en" target="_blank">2,6 milioane de persoane</a> lucrează în producția directă de autovehicule. Ei reprezentă 8,5 % din totalul angajaților din producție din UE.',
            location: {
                center: [14.75384, 51.86013],
                zoom: 3.95,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleven-chapter',
            alignment: 'fully',
            hidden: false,
            title: '20% din producția europeană de autoturisme se face în Germania',
            image: '',
            description: 'Din 129 de fabrici care produc autoturisme la nivelul Europei, 22 se află în Germania. 12 astfel de fabrici sunt în Franța și 8 în Spania.',
            location: {
                center: [10.45154, 50.99356],
                zoom: 5.94,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelve-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/12873229/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/12873229/?utm_source=embed&utm_campaign=visualisation/12873229" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [18.72648, 47.05194],
                zoom: 4.82,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteen-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'România',
            image: '',
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./romania.png"></div> Industria auto contribuie cu  <a href="https://www.agerpres.ro/social/2022/07/05/video-ministrul-economiei-industria-de-automotive-reprezinta-aproximativ-28-din-pib-ul-romaniei--945283" target="_blank">28% la PIB-ul României</a>, ceea ce o transformă într-o industrie strategică. <p> În anul 2021, România se afla pe locul 7 din 16 state producătoare de autoturisme din Uniunea Europeană, cu peste 420 de mii de mașini produse. Comparat cu producția din Germania, greul industriei auto europene, în țara noastră s-a produs a șaptea parte din ce a ieșit din fabricile auto germane. Nu e deloc puțin, dacă ținem cont și de puterea relativă a producției din cele două țări sau de dimensiunea industriilor auto din fiecare dintre ele. ',
            location: {
                center: [25.25430, 46.02025],
                zoom: 6.48,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'forteen-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Anul 2022, record pentru producția auto în România',
            image: '',
            description: 'Iar lucrurile par să fie pe un trend ascendent pentru sectorul auto românesc. În 2022, am văzut  <a href="https:https://acarom.ro/blog/productie-vehicule-in-romania-total-2022/" target="_blank">o creștere de puțin peste 20% a producției de autoturisme </a>. în România față de anul 2021. Producția a atins, anul trecut, volumul de aproape 510 de mii de unități. 314 mii au fost produse de Dacia, în fabrica de la Mioveni.',
            location: {
                center: [24.92764, 44.94960],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifteen-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: 'Și fabrica de la Craiova a avut o producție consistentă în anul 2022. Aici s-au produs puțin peste 195 de mii de autoturisme.',
            location: {
                center: [23.84976, 44.29033],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixteen-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Care sunt factorii care fac o industrie auto puternică și cum a evoluat România',
            image: '',
            description: 'Dezvoltarea industriei auto depinde de multe aspecte. Printre cele mai importante sunt infrastructura, o piață internă puternică, cu cerere mare, forță de muncă calificată, inovația, dar și susținerea mediul de business. Dacă ne uităm cu atenție la acești factori, observăm că industria auto se dezvoltă în state cu piețe interne mari, care oferă o cerere constantă de mașini și o bază pentru creșterea producătorilor autohtoni.',
            location: {
                center: [23.84976, 44.29033],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'seventeen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './row-new-cars-port.png',
            description: 'Sunt state cu o cultură puternică a inovației și tehnologiei, ceea ce a ajutat industriile lor de producție auto să rămână competitive în ceea ce privește designul, procesele de producție și tehnologie. Sunt, de asemenea, țări care își asumă susținerea acestui sector prin stimulente, subvenții și politici care încurajează investițiile și creșterea.',
            location: {
                center: [25.52039, 44.63665],
                zoom: 8.67,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighteen-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: 'Pe urmă, datele ne arată că cei mai importanți producători de mașini s-au dezvoltat în state care au o istorie lungă de producție de automobile și au dezvoltat o bază de producție puternică de-a lungul anilor, cu lanțuri de aprovizionare stabile. Infrastructura, după cum știm și în cazul României, e importantă, dar nu e suficientă, dacă ea nu e dublată și de o forță de muncă calificată, inclusiv cea de care e nevoie pentru a facilita operarea și extinderea afacerilor producătorilor de mașini. ',
            location: {
                center: [25.52039, 44.63665],
                zoom: 8.67,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nineteen-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Cât de competitivă este România',
            image: '',
            description: 'Pentru a înțelege cât de competitivă este România, am luat indicatorii de mai sus și i-am reprezentat în contextul european. Prima concluzie e că România a făcut pași majori în dezvoltarea industriei auto, iar în acest moment înregistrează creșteri exponențiale pentru mai mulți indicatori importanți.',
            location: {
                center: [24.93705, 44.95388],
                zoom: 13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Piața de desfacere',
            image: '',
            description: 'Deși România este ultima țară din UE la numărul de mașini/1.000 de locuitori, are acum cea mai mare creștere din ultimul deceniu. În doar 10 ani, numărul românilor care dețin mașini s-a dublat, pe când media europeană de creștere în ultimii 10 ani este discretă.',
            location: {
                center: [24.93705, 44.95388],
                zoom: 13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentyone-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/12872911/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/12872911/?utm_source=embed&utm_campaign=visualisation/12872911" target="top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [24.93705, 44.95388],
                zoom: 13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentytwo-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Forță de muncă pregătită. România, competitivă la numărul de ingineri și oameni de știință',
            image: '',
            description: 'Industria auto este, după cum am arătat, unul dintre cele mai importante și dinamice sectoare ale economiei globale. E și un sector care continuă să evolueze rapid. <p> De la vehicule electrice și hibride, până la sisteme de conducere autonomă, progresele tehnologiei auto transformă modul în care ne gândim la transport. Pe măsură ce noile tehnologii apar și preferințele consumatorilor se schimbă, nevoia de oameni de știință și ingineri calificați pentru industria auto devine din ce în ce mai importantă.',
            location: {
                center: [26.10514, 44.43873],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'twentythree-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: 'Un alt domeniu cheie în  care industria auto are nevoie de oameni foarte bine pregătiți este cel al compoziției materialelor folosite pe linia de producție. Aliajele ușoare, compozitele și polimerii sunt esențiali pentru reducerea greutății și îmbunătățirea performanței vehiculelor moderne. <p> La acest capitol, România nu stă deloc rău. Ocupă locul 8 în UE la numărul de ingineri și oameni de știință.',
            location: {
                center: [26.10514, 44.43873],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentyfour-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/12891814/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/12891814/?utm_source=embed&utm_campaign=visualisation/12891814" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [26.10514, 44.43873],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentyfive-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Inovație',
            image: '',
            description: 'Potrivit <a href="https://research-and-innovation.ec.europa.eu/knowledge-publications-tools-and-data/publications/all-publications/european-innovation-scoreboard-2022_en" target="_blank">European Innovation Scoreboard</a>, România este un inovator emergent. E o etichetă care sună mai bine decât e cazul. România e în continuare pe ultimele locuri în Uniunea Europeană la capitolul inovație. Nici măcar nu batem pasul pe loc, ci facem chiar pași înapoi. Potrivit studiului, performanța României a scăzut în 2016, 2017, 2018 și 2022. În 2022, România a înregistrat același nivel de performanță în sectorul inovației ca în 2015. <p> Privit în detaliu, cea mai mare scădere din 2022 a fost cu cheltuielile pentru inovare/angajat și în sectorul IMM -urilor considerate inovatoare. Aici, explicația poate sta în incertitudinea economică, pe fondul căreia multe companii au decis să taie din bugete.',
            location: {
                center: [21.34923, 45.80305],
                zoom: 7,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentysix-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: '<iframe src="https://flo.uri.sh/visualisation/12931185/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/12931185/?utm_source=embed&utm_campaign=visualisation/12931185" target="_to" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            location: {
                center: [21.34923, 45.80305],
                zoom: 7,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentyseven-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Infrastructură',
            image: '',
            description: 'Calitatea infrastructurii unei țări, unde sunt incluse rețelele de transport, furnizarea de energie și telecomunicațiile, poate afecta eficiența și competitivitatea industriei de fabricație a autovehiculelor. O infrastructură bine dezvoltată poate ajuta la reducerea costurilor de transport, la îmbunătățirea logisticii și la atragerea de noi investiții. Graficul de mai jos arată numărul de kilometri de autostrăzi și drumuri europene raportat la suprafața țării.',
            location: {
                center: [25.86354, 44.46562],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentyeight-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: "<iframe src='https://flo.uri.sh/visualisation/12892128/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/12892128/?utm_source=embed&utm_campaign=visualisation/12892128' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>",
            location: {
                center: [25.86354, 44.46562],
                zoom: 14,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twentynine-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: "Odată ce tragem linie, avantajul competitiv al României în industria auto provine în primul rând din forța de muncă calificată. Ne ajută și geografia, pentru că România e poziționată strategic pentru a permite accesul convenabil la piețele majore atât din Europa, cât și din Orientul Mijlociu și Africa.",
            location: {
                center: [24.68581, 45.99089],
                zoom: 5.2,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirty-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: "Și deși lipsa infrastructurii e un handicap serios, care trebuie remediat în anii care vin, statul nu poate ignora celelalte criterii de care e nevoie pentru a crește puterea industriei auto românești la nivel european. Și trebuie să se asigure că nu ne pierdem atu-ul pe care îl avem de pe urma forței de muncă calificate. Chiar dacă, până acum, investitorii din acest sector au trecut cu vederea unele puncte slabe, competiția devine tot mai puternică la nivel european și regional, iar România va trebui să demonstreze că poate ține pasul.",
            location: {
                center: [24.68581, 45.99089],
                zoom: 5.2,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};
