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
    byline: '<a href="https://panorama.ro/author/edit/" target="_blank">Edit Gyenge</a> <p> <img src="./scroll.png"> </p> <p> scroll </p>',
    footer: '<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. <p> <img src="./scroll.png"> </p> <p> scroll </p>',
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
            description: 'Înainte de pandemie, în anul 2018, în lume se produceau <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> peste 71 de milioane</span> de autoturisme. Odată cu pandemia, în 2020, sectorul auto global s-a confruntat cu o serie de perturbări ale căror efecte se resimt și azi. Am văzut, pe de-o parte, linii de producție sistate, din cauza lockdown-urilor, după care sectorul nu a putut face față cererii în revenire, pentru că a apărut o criză globală de semiconductori pentru automobile. Această lipsă de cipuri a dus la tăierea a aproximativ  <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> 11,3 milioane de vehicule </span> din planurile de producție la nivel mondial. Este cea mai mare scădere a producției din ultimul deceniu. Panorama a explicat <a href=“https://panorama.ro/criza-cipuri-semiconductori-auto-european-chips-act/”>aici </a> impactul crizei cipurilor asupra producției de mașini. ',
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
            title: 'De ce este importantă industria auto',
            image: '',
            description: 'Pentru a produce 60 de milioane de vehicule</a> e nevoie de aproximativ 9 milioane de oameni, care sunt angajați direct în fabricarea vehiculelor și a pieselor care intră în ele. E o forță de muncă ce reprezintă peste 5% din totalul angajării în producție din lume. <p> Mai mult: se estimează că fiecare loc de muncă direct din industria auto susține indirect cel puțin alte 5 locuri de muncă într-o comunitate. Asta se traduce în peste 50 de milioane de locuri de muncă datorate industriei auto, potrivit informațiilor <a href=“https://www.oica.net/category/economic-contributions/”>OICA (International Organization of Motor Vehicle Manufacturers)</a>. Mulți oameni sunt angajați în producție și servicii conexe. <p> Automobilele sunt construite folosind bunuri din multe alte industrii, cum ar fi oțel, fier, aluminiu, sticlă, materiale plastice, covoare, textile, cauciuc, semiconductorii despre care vorbeam anterior și multe altele. Aceste cifre ne dau măsura puterii acestui sector în economia globală.<p> <img src="./productie masini.png"> </p>',
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
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Japonia, pe locul 2',
            image: '',
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./japonia.png"></div> Japonia, pe de altă parte, se clasează pe locul al doilea la producția de mașini, cu peste <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> 6.6 milioane </span> de autoturisme produse Înainte de pandemie, Toyota concura acerb cu Volkswagen la numărul de autovehicule produse. <iframe src="https://flo.uri.sh/visualisation/12873896/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe> <div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/12873896/?utm_source=embed&utm_campaign=visualisation/12873896" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div> ',
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
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./ue.png"></div> Prin comparație cu cele 21 de milioane de autoturisme produse de China, în UE s-au făcut <span style="background-color: #C027B9; padding: 0.5vh; border-radius: 10px; color:#ffffff; font-weight: bold;"> peste 10 milioane </span> de autoturisme în 2021. Industria auto e o forță imposibil de neglijat în Europa. 22 de state din Europa produc automobile, dintre care 16 sunt din Uniunea Europeană. <p> Doar la nivelul Uniunii Europene, <a href=“https://single-market-economy.ec.europa.eu/sectors/automotive-industry_en”>2,6 milioane de persoane</a> lucrează în producția directă de autovehicule. Ei reprezentă 8,5 % din totalul angajaților din producție din UE.',
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
            title: '20% din producția europeană de autoturisme se face în Germania.',
            image: '',
            description: 'Din 129 de fabrici care produc autoturisme la nivelul Europei, 22 se află în Germania. 12 astfel de fabrici sunt în Franța și 8 în Spania.  <iframe src="https://flo.uri.sh/visualisation/12873229/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/12873229/?utm_source=embed&utm_campaign=visualisation/12873229" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
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
            description: '<div style="width:65px; height:43px; padding:5px;"> <img src="./romania.png"></div> Industria auto contribuie cu <a href=“https://www.agerpres.ro/social/2022/07/05/video-ministrul-economiei-industria-de-automotive-reprezinta-aproximativ-28-din-pib-ul-romaniei--945283”>28% la PIB-ul României </a>, ceea ce o transformă într-o industrie strategică. <p> În anul 2021, România se afla pe locul 7 din 16 state producătoare de autoturisme din Uniunea Europeană, cu peste 420 de mii de mașini produse. Comparat cu producția din Germania, greul industriei auto europene, în țara noastră s-a produs a șaptea parte din ce a ieșit din fabricile auto germane. Nu e deloc puțin, dacă ținem cont și de puterea relativă a producției din cele două țări sau de dimensiunea industriilor auto din fiecare dintre ele. ',
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
            description: 'Iar lucrurile par să fie pe un trend ascendent pentru sectorul auto românesc. În 2022, am văzut <a href=“https:https://acarom.ro/blog/productie-vehicule-in-romania-total-2022/”>o creștere de puțin peste 20% a producției de autoturisme </a> în România față de anul 2021. Producția a atins, anul trecut, volumul de aproape 510 de mii de unități. 314 mii au fost produse de Dacia, în fabrica de la Mioveni.',
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
            id: 'tenth-chapter',
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
            id: 'eleventh-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Care sunt factorii care fac o industrie auto puternică și cum a evoluat România',
            image: '',
            description: 'Dezvoltarea industriei auto depinde de multe aspecte. Printre cele mai importante sunt infrastructura, o piață internă puternică, cu cerere mare, forță de muncă calificată, inovația, dar și susținerea mediul de business. Dacă ne uităm cu atenție la acești factori, observăm că industria auto se dezvoltă în state cu piețe interne mari, care oferă o cerere constantă de mașini și o bază pentru creșterea producătorilor autohtoni.',
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
            id: 'twelvth-chapter',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: './row-new-cars-port.png',
            description: ' Sunt state cu o cultură puternică a inovației și tehnologiei, ceea ce a ajutat industriile lor de producție auto să rămână competitive în ceea ce privește designul, procesele de producție și tehnologie. Sunt, de asemenea, țări care își asumă susținerea acestui sector prin stimulente, subvenții și politici care încurajează investițiile și creșterea. <p> Pe urmă, datele ne arată că cei mai importanți producători de mașini s-au dezvoltat în state care au o istorie lungă de producție de automobile și au dezvoltat o bază de producție puternică de-a lungul anilor, cu lanțuri de aprovizionare stabile. Infrastructura, după cum știm și în cazul României, e importantă, dar nu e suficientă, dacă ea nu e dublată și de o forță de muncă calificată, inclusiv cea de care e nevoie pentru a facilita operarea și extinderea afacerilor producătorilor de mașini. ',
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
