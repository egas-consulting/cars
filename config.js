var config = {
    style: 'mapbox://styles/ed1990/clejv8woj007301pva7tczmu6',
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
    title: '<span style="font-family:sans-serif; background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-size:1.2rem" >Industria auto în 2022 </span>',
    subtitle: '<span style=" font-family: playfair display, serif; color:#ffffff; font-size:3rem" >Cât de competitivă este România pe piața producției de mașini</span>',
    byline: 'Edit Gyenge <p> <img src="./scroll.png"> </p> <p> scroll </p>',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
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
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Înainte de pandemie, în anul 2018, în lume se produceau <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> peste 71 de milioane</span> de mașini. Adică o mașină la fiecare 106 persoane de pe glob. Din 2020, sectorul auto global s-a confruntat cu cereri scăzute și opriri de producție ca urmare a pandemiei COVID-19 și a penuriei de semiconductori pentru automobile. Această lipsă de cipuri a dus la tăierea a aproximativ <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> 11,3 milioane de vehicule </span> din producția mondială. Este cea mai mare scădere a producției din ultimul deceniu. ',
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
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Cât de importantă este industria auto',
            image: '',
            description: 'Construirea a 60 de milioane de vehicule necesită angajarea a aproximativ 9 milioane de oameni direct în fabricarea vehiculelor și a pieselor care intră în ele. Aceasta reprezintă peste 5 la sută din totalul angajării în producție din lume. Se estimează că fiecare loc de muncă direct auto susține cel puțin alte 5 locuri de muncă indirecte în comunitate, rezultând peste 50 de milioane de locuri de muncă datorate industriei auto. Mulți oameni sunt angajați în producție și servicii conexe. Automobilele sunt construite folosind bunuri din multe industrii, inclusiv oțel, fier, aluminiu, sticlă, materiale plastice, sticlă, covoare, textile, cipuri de computer, cauciuc și multe altele. <p> <img src="./productie masini.png"> </p>',
            location: {
                center: [103.58648, 33.95494],
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
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'China, cel mai mare producător',
            image: '',
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./china.png"></div> China rămâne cel mai mare producător de autoturisme din lume. În anul 2021 a produs <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> peste 26 de milioane de automobile. </span> Majoritatea mașinilor fabricate în China sunt vândute în interiorul țării. Exporturile reprezintă puțin peste 10 procente. ',
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
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Japonia, pe locul 2',
            image: '',
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./japonia.png"></div> Japonia se clasează pe locul 2 cu <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> 6.6 milioane </span> de autoturisme produse în 2021. Înainte de pandemie, Toyota concura acerb cu Volksvagen la numărul de autovehicule produse. <iframe src="https://flo.uri.sh/visualisation/12873896/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe> <div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/12873896/?utm_source=embed&utm_campaign=visualisation/12873896" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div> ',
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
            id: 'sixth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Situația la nivelul UE',
            image: '',
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./ue.png"></div> În 2021, statele membre ale Uniunii Europene au produs <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> peste 10 milioane </span> de autoturisme. Doar la nivelul Uniunii Europene, 2,6 milioane de persoane lucrează în producția directă de autovehicule, reprezentând 8,5 % din ocuparea forței de muncă din UE în producție. 22 de state din europa produc automobile, dintre care 16 sunt din Uniunea Europeană.',
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
            id: 'seventh-chapter',
            alignment: 'fully',
            hidden: false,
            title: '20% din producția europeană de autoturisme se face în Germania',
            image: '',
            description: 'Sunt 129 de fabrici care produc autoturisme la nivelul Europei, 22 dintre acestea se află în Germania, 12 în Franța și 8 în Spania. Click pe harta pentru a vedea distribuția fabricilor care produc autoturisme la nivelul Europei și mărcile produse.  <iframe src="https://flo.uri.sh/visualisation/12873229/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/12873229/?utm_source=embed&utm_campaign=visualisation/12873229" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            id: 'eight-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'România',
            image: '',
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./romania.png"></div> În anul 2021 România se afla pe locul 8 din 16 state producătoare de automobile din Uniunea Europeană, cu peste 420 de mii de automobile produse, adică a șaptea parte din producția Germaniei. ',
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
            id: 'ninth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Anul 2022, record pentru producția auto în România',
            image: '',
            description: 'Pe intreg anul 2022, productia de autoturisme in Romania a atins volumul de 509.465 unitati. 314 mii au fost produse de Dacia, în fabrica de la Mioveni.',
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
            id: 'ninth-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: 'Și fabrica de la Craiova a avut o producție consistentă în anul 2022. Aici s-au produs 195.237 de autoturisme. În medie, creșterea producției de autoturisme în România față de anul 2021 este de puțin peste 20%',
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
            id: 'tenth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Care sunt factorii care fac o industrie auto puternică și cum a evoluat România',
            image: '',
            description: 'Dezvoltarea industriei auto depinde de multe aspecte, dar printre cele mai importante sunt infrastructura, o piață internă puternică, cu cerere mare, forță de muncă calificată, inovația, dar și susținerea mediul de business. Cei mai importanți producători de mașini s-au dezvoltat în state care au o istorie lungă de producție de automobile și au dezvoltat o bază de producție puternică de-a lungul anilor, au stabilit lanțuri de aprovizionare, infrastructură și au format forță de muncă calificată care facilitează operarea și extinderea afacerilor producătorilor de mașini.',
            location: {
                center: [25.43132, 45.92487],
                zoom: 5.87,
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
            id: 'eleventh-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: './row-new-cars-port.png',
            description: ' Industria auto se dezvoltă în state cu piețe interne mari, care oferă o cerere constantă de mașini și o bază pentru creșterea producătorilor autohtoni. Sunt state cu o cultură puternică a inovației și tehnologiei, ceea ce a ajutat industriile lor de producție auto să rămână în fruntea curbei în ceea ce privește designul, procesele de producție și tehnologie și au sunt susținute de guverne prin stimulente, subvenții și politici care încurajează investițiile și creșterea.',
            location: {
                center: [25.43132, 45.92487],
                zoom: 5.87,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
