import React from 'react';

function CommitteeWord(){

    return(
        <section className='flex flex-col gap-20'>
            <div className="container mx-auto sm:px-6 lg:px-8 bg-black text-white">
                <h1 className='text-2xl font-bold pt-14 px-12'>MOT DU COMITE <br /> ORGANISATEUR</h1>
                <p className="text-justify text-base pt-14 pb-20 px-12">Les élèves ingénieurs des trois prestigieuses écoles, l'INSEA (Institut National de Statistique et d'Économie Appliquée), l'ENSIAS
                (Ecole Nationale Supérieure d'Informatique et d'Analyses des Systèmes) et l'INPT (Institut National des Postes et
                Télécommunications) ont le plaisir de vous annoncer la tenue de la 19ème édition du Forum GENI Entreprises. Cet événement de
                grande envergure organisé à l'échelle nationale vise à mettre en relation les élèves ingénieurs en quête de leurs futurs emplois
                avec des entreprises à la recherche de talents prometteurs dans diverses spécialités d'ingénieurs.<br/><br/>
                Cette année, le forum portera sur le thème : "Nouvel essor du développement socio-économique au Maroc : Réformes et
                stratégies dans un monde complexe et incertain", un sujet d'actualité et d'importance cruciale pour l'ensemble du pays. Les 18
                éditions précédentes du Forum GENI Entreprises ont connu un vif succès, et nous sommes déterminés à perpétuer cette tradition
                en proposant un programme de haute qualité, axé sur l'éthique, la société et les professionnels, et en mettant a la disposition de
                nos participants toutes les opportunités possibles pour se faire connaître et se faire remarquer par les entreprises.<br/><br/>
                Nous avons le privilège et l'honneur de vous convier à cette édition exceptionnelle qui se déroulera les 18 et 19 octobre 2023 à
                l'INSEA, et nous espérons vous y accueillir nombreux afin de profiter de cette occasion unique de renforcer vos compétences, de
                découvrir de nouvelles opportunités de carrière et de réseauter avec les professionnels du monde entier.</p>
            </div>
            <div className="container mx-auto sm:px-6 lg:px-8 bg-zelijSignature bg-cover bg-center mt-2 columns-3 flex flex-row lg:p-80 md:p-70 sm:p-36 xs:p-16">

                <div className="basis-1/3"></div>
                <div className="basis-1/3">
                    <h1 className='font-bold text-3xl text-khder'>NOUVEL ESSOR DU DÉVELOPPEMENT SOCIO-ÉCONOMIQUE AU MAROC</h1><br />
                    <h3 className='text-xl text-khder'>Réformes et stratégies dans un monde complexe et incertain</h3>
                </div>
                <div className="basis-1/3"></div>

            </div>
        </section>
    );
}

export default CommitteeWord;