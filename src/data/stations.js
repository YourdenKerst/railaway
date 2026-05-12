// Comprehensive global train stations database — searchable offline
export const STATIONS = [

  // ── Netherlands ──────────────────────────────────────────────────────────

  // Amsterdam
  { id: '8400058', name: 'Amsterdam Centraal', location: { latitude: 52.3791, longitude: 4.9003 } },
  { id: '8400059', name: 'Amsterdam Zuid', location: { latitude: 52.3389, longitude: 4.8722 } },
  { id: '8400060', name: 'Amsterdam Amstel', location: { latitude: 52.3467, longitude: 4.9178 } },
  { id: '8400061', name: 'Amsterdam Bijlmer ArenA', location: { latitude: 52.3131, longitude: 4.9478 } },
  { id: '8400062', name: 'Amsterdam Sloterdijk', location: { latitude: 52.3886, longitude: 4.8378 } },
  { id: '8400063', name: 'Amsterdam RAI', location: { latitude: 52.3394, longitude: 4.8897 } },
  { id: '8400064', name: 'Amsterdam Muiderpoort', location: { latitude: 52.3619, longitude: 4.9356 } },
  { id: '8400065', name: 'Amsterdam Lelylaan', location: { latitude: 52.3572, longitude: 4.8381 } },
  { id: '8400067', name: 'Amsterdam Science Park', location: { latitude: 52.3561, longitude: 4.9481 } },

  // Utrecht
  { id: '8400561', name: 'Utrecht Centraal', location: { latitude: 52.0894, longitude: 5.1103 } },
  { id: '8400562', name: 'Utrecht Vaartsche Rijn', location: { latitude: 52.0739, longitude: 5.1239 } },
  { id: '8400563', name: 'Utrecht Overvecht', location: { latitude: 52.1119, longitude: 5.1228 } },
  { id: '8400564', name: 'Utrecht Leidsche Rijn', location: { latitude: 52.0856, longitude: 5.0697 } },
  { id: '8400565', name: 'Utrecht Lunetten', location: { latitude: 52.0631, longitude: 5.1456 } },
  { id: '8400566', name: 'Utrecht Terwijde', location: { latitude: 52.0881, longitude: 5.0417 } },

  // Rotterdam
  { id: '8400530', name: 'Rotterdam Centraal', location: { latitude: 51.9225, longitude: 4.4700 } },
  { id: '8400531', name: 'Rotterdam Blaak', location: { latitude: 51.9181, longitude: 4.4881 } },
  { id: '8400532', name: 'Rotterdam Alexander', location: { latitude: 51.9244, longitude: 4.5661 } },
  { id: '8400533', name: 'Rotterdam Noord', location: { latitude: 51.9317, longitude: 4.4731 } },
  { id: '8400534', name: 'Rotterdam Stadion', location: { latitude: 51.8933, longitude: 4.5244 } },
  { id: '8400535', name: 'Rotterdam Lombardijen', location: { latitude: 51.8869, longitude: 4.5189 } },
  { id: '8400536', name: 'Rotterdam Zuidplein', location: { latitude: 51.8811, longitude: 4.4769 } },

  // Den Haag
  { id: '8400319', name: 'Den Haag Centraal', location: { latitude: 52.0800, longitude: 4.3242 } },
  { id: '8400125', name: 'Den Haag HS', location: { latitude: 52.0706, longitude: 4.3250 } },
  { id: '8400320', name: 'Den Haag Laan v NOI', location: { latitude: 52.0917, longitude: 4.3461 } },
  { id: '8400321', name: 'Den Haag Mariahoeve', location: { latitude: 52.0928, longitude: 4.3831 } },
  { id: '8400322', name: 'Den Haag Moerwijk', location: { latitude: 52.0483, longitude: 4.3272 } },

  // Leiden
  { id: '8400255', name: 'Leiden Centraal', location: { latitude: 52.1664, longitude: 4.4814 } },
  { id: '8400256', name: 'Leiden Lammenschans', location: { latitude: 52.1528, longitude: 4.5039 } },

  // Delft
  { id: '8400097', name: 'Delft', location: { latitude: 52.0131, longitude: 4.3569 } },
  { id: '8400098', name: 'Delft Zuid', location: { latitude: 51.9994, longitude: 4.3736 } },

  // Schiedam / Vlaardingen / Maassluis
  { id: '8400544', name: 'Schiedam Centrum', location: { latitude: 51.9200, longitude: 4.4081 } },
  { id: '8400580', name: 'Vlaardingen Centrum', location: { latitude: 51.9122, longitude: 4.3444 } },
  { id: '8400581', name: 'Vlaardingen Oost', location: { latitude: 51.9139, longitude: 4.3700 } },
  { id: '8400390', name: 'Maassluis', location: { latitude: 51.9167, longitude: 4.2508 } },
  { id: '8400391', name: 'Maassluis West', location: { latitude: 51.9208, longitude: 4.2278 } },
  { id: '8400308', name: 'Hoek van Holland Haven', location: { latitude: 51.9786, longitude: 4.1336 } },
  { id: '8400309', name: 'Hoek van Holland Strand', location: { latitude: 51.9847, longitude: 4.1181 } },

  // Dordrecht / Barendrecht
  { id: '8400096', name: 'Dordrecht', location: { latitude: 51.8089, longitude: 4.6683 } },
  { id: '8400601', name: 'Dordrecht Zuid', location: { latitude: 51.7928, longitude: 4.6686 } },
  { id: '8400113', name: 'Barendrecht', location: { latitude: 51.8578, longitude: 4.5333 } },

  // Gouda / Zoetermeer
  { id: '8400203', name: 'Gouda', location: { latitude: 52.0178, longitude: 4.7075 } },
  { id: '8400610', name: 'Zoetermeer', location: { latitude: 52.0581, longitude: 4.4928 } },
  { id: '8400611', name: 'Zoetermeer Oost', location: { latitude: 52.0569, longitude: 4.5244 } },

  // Schiphol / Alphen / Woerden
  { id: '8400519', name: 'Schiphol', location: { latitude: 52.3097, longitude: 4.7614 } },
  { id: '8400070', name: 'Alphen aan den Rijn', location: { latitude: 52.1294, longitude: 4.6575 } },
  { id: '8400594', name: 'Woerden', location: { latitude: 52.0897, longitude: 4.8814 } },
  { id: '8400119', name: 'Bodegraven', location: { latitude: 52.0825, longitude: 4.7469 } },
  { id: '8400591', name: 'Waddinxveen', location: { latitude: 52.0458, longitude: 4.6594 } },
  { id: '8400592', name: 'Waddinxveen Noord', location: { latitude: 52.0614, longitude: 4.6469 } },
  { id: '8400120', name: 'Breukelen', location: { latitude: 52.1717, longitude: 4.9875 } },

  // Eindhoven / Tilburg / Breda
  { id: '8400100', name: 'Eindhoven', location: { latitude: 51.4436, longitude: 5.4797 } },
  { id: '8400101', name: 'Eindhoven Strijp-S', location: { latitude: 51.4397, longitude: 5.4511 } },
  { id: '8400102', name: 'Eindhoven Tongelre', location: { latitude: 51.4389, longitude: 5.5139 } },
  { id: '8400430', name: 'Tilburg', location: { latitude: 51.5617, longitude: 5.0811 } },
  { id: '8400431', name: 'Tilburg Universiteit', location: { latitude: 51.5628, longitude: 5.0453 } },
  { id: '8400122', name: 'Breda', location: { latitude: 51.5952, longitude: 4.7800 } },
  { id: '8400181', name: 'Helmond', location: { latitude: 51.4803, longitude: 5.6583 } },

  // 's-Hertogenbosch / Oss / Rosmalen
  { id: '8400185', name: "'s-Hertogenbosch", location: { latitude: 51.6917, longitude: 5.2944 } },
  { id: '8400366', name: 'Oss', location: { latitude: 51.7669, longitude: 5.5278 } },
  { id: '8400367', name: 'Oss West', location: { latitude: 51.7669, longitude: 5.5000 } },
  { id: '8400508', name: 'Rosmalen', location: { latitude: 51.7253, longitude: 5.3567 } },
  { id: '8400090', name: 'Boxtel', location: { latitude: 51.5961, longitude: 5.3361 } },

  // Roosendaal / Bergen op Zoom
  { id: '8400507', name: 'Roosendaal', location: { latitude: 51.5303, longitude: 4.4661 } },
  { id: '8400110', name: 'Bergen op Zoom', location: { latitude: 51.5003, longitude: 4.2889 } },
  { id: '8400453', name: 'Rilland-Bath', location: { latitude: 51.4039, longitude: 4.1628 } },
  { id: '8400251', name: 'Lage Zwaluwe', location: { latitude: 51.6914, longitude: 4.5714 } },

  // Arnhem / Nijmegen
  { id: '8400145', name: 'Arnhem Centraal', location: { latitude: 51.9850, longitude: 5.8994 } },
  { id: '8400146', name: 'Arnhem Velperpoort', location: { latitude: 51.9894, longitude: 5.9197 } },
  { id: '8400295', name: 'Nijmegen', location: { latitude: 51.8453, longitude: 5.8528 } },
  { id: '8400296', name: 'Nijmegen Lent', location: { latitude: 51.8733, longitude: 5.8561 } },
  { id: '8400297', name: 'Nijmegen Dukenburg', location: { latitude: 51.8167, longitude: 5.8078 } },

  // Apeldoorn / Deventer / Zutphen
  { id: '8400075', name: 'Apeldoorn', location: { latitude: 52.2097, longitude: 5.9717 } },
  { id: '8400099', name: 'Deventer', location: { latitude: 52.2567, longitude: 6.1622 } },
  { id: '8400617', name: 'Zutphen', location: { latitude: 52.1381, longitude: 6.1967 } },
  { id: '8400107', name: 'Doetinchem', location: { latitude: 51.9678, longitude: 6.2992 } },
  { id: '8400618', name: 'Vorden', location: { latitude: 52.0997, longitude: 6.3083 } },
  { id: '8400619', name: 'Ruurlo', location: { latitude: 52.0822, longitude: 6.4497 } },
  { id: '8400620', name: 'Lichtenvoorde-Groenlo', location: { latitude: 51.9925, longitude: 6.5550 } },
  { id: '8400621', name: 'Winterswijk', location: { latitude: 51.9733, longitude: 6.7191 } },

  // Ede / Wageningen / Veenendaal
  { id: '8400109', name: 'Ede-Wageningen', location: { latitude: 51.9756, longitude: 5.6644 } },
  { id: '8400108', name: 'Ede Centrum', location: { latitude: 52.0433, longitude: 5.6644 } },
  { id: '8400568', name: 'Veenendaal-De Klomp', location: { latitude: 52.0256, longitude: 5.5572 } },
  { id: '8400567', name: 'Veenendaal Centrum', location: { latitude: 52.0269, longitude: 5.5569 } },
  { id: '8400114', name: 'Barneveld Noord', location: { latitude: 52.1567, longitude: 5.6044 } },

  // Tiel / Geldermalsen / Culemborg
  { id: '8400429', name: 'Tiel', location: { latitude: 51.8903, longitude: 5.4328 } },
  { id: '8400189', name: 'Geldermalsen', location: { latitude: 51.8806, longitude: 5.2792 } },
  { id: '8400091', name: 'Culemborg', location: { latitude: 51.9464, longitude: 5.2303 } },

  // Amersfoort / Baarn / Soest / Zeist / Driebergen
  { id: '8400066', name: 'Amersfoort', location: { latitude: 52.1536, longitude: 5.3728 } },
  { id: '8400604', name: 'Amersfoort Vathorst', location: { latitude: 52.1889, longitude: 5.3878 } },
  { id: '8400116', name: 'Baarn', location: { latitude: 52.2094, longitude: 5.2875 } },
  { id: '8400524', name: 'Soest', location: { latitude: 52.1778, longitude: 5.2939 } },
  { id: '8400525', name: 'Soestdijk', location: { latitude: 52.1981, longitude: 5.2639 } },
  { id: '8400597', name: 'Zeist', location: { latitude: 52.0878, longitude: 5.2331 } },
  { id: '8400105', name: 'Driebergen-Zeist', location: { latitude: 52.0600, longitude: 5.2778 } },

  // Haarlem / Zaandam / Alkmaar / Hoorn
  { id: '8400174', name: 'Haarlem', location: { latitude: 52.3875, longitude: 4.6392 } },
  { id: '8400596', name: 'Zaandam', location: { latitude: 52.4400, longitude: 4.8161 } },
  { id: '8400068', name: 'Alkmaar', location: { latitude: 52.6383, longitude: 4.7403 } },
  { id: '8400210', name: 'Hoorn', location: { latitude: 52.6436, longitude: 5.0617 } },
  { id: '8400148', name: 'Enkhuizen', location: { latitude: 52.7067, longitude: 5.2936 } },

  // Hilversum / Bussum / Naarden / Weesp
  { id: '8400195', name: 'Hilversum', location: { latitude: 52.2272, longitude: 5.1786 } },
  { id: '8400131', name: 'Bussum Zuid', location: { latitude: 52.2694, longitude: 5.1664 } },
  { id: '8400287', name: 'Naarden-Bussum', location: { latitude: 52.2939, longitude: 5.1525 } },
  { id: '8400590', name: 'Weesp', location: { latitude: 52.3083, longitude: 5.0436 } },
  { id: '8400103', name: 'Diemen', location: { latitude: 52.3461, longitude: 4.9611 } },
  { id: '8400375', name: 'Purmerend', location: { latitude: 52.5022, longitude: 4.9606 } },

  // Zwolle / Enschede / Hengelo / Almelo
  { id: '8400228', name: 'Zwolle', location: { latitude: 52.5028, longitude: 6.0906 } },
  { id: '8400138', name: 'Enschede', location: { latitude: 52.2222, longitude: 6.8942 } },
  { id: '8400191', name: 'Hengelo', location: { latitude: 52.2658, longitude: 6.7881 } },
  { id: '8400151', name: 'Almelo', location: { latitude: 52.3594, longitude: 6.6567 } },
  { id: '8400380', name: 'Kampen', location: { latitude: 52.5581, longitude: 5.9103 } },
  { id: '8400381', name: 'Kampen Zuid', location: { latitude: 52.5369, longitude: 5.9217 } },
  { id: '8400196', name: 'Hardenberg', location: { latitude: 52.5736, longitude: 6.6172 } },
  { id: '8400521', name: 'Steenwijk', location: { latitude: 52.7875, longitude: 6.1192 } },

  // Groningen / Leeuwarden / Frisian cities
  { id: '8400213', name: 'Groningen', location: { latitude: 53.2108, longitude: 6.5640 } },
  { id: '8400257', name: 'Leeuwarden', location: { latitude: 53.1989, longitude: 5.7933 } },
  { id: '8400527', name: 'Sneek', location: { latitude: 53.0319, longitude: 5.6614 } },
  { id: '8400528', name: 'Sneek Noord', location: { latitude: 53.0414, longitude: 5.6542 } },
  { id: '8400194', name: 'Heerenveen', location: { latitude: 52.9567, longitude: 5.9222 } },
  { id: '8400074', name: 'Assen', location: { latitude: 52.9939, longitude: 6.5578 } },
  { id: '8400139', name: 'Emmen', location: { latitude: 52.7811, longitude: 6.9011 } },
  { id: '8400205', name: 'Hoogeveen', location: { latitude: 52.7222, longitude: 6.4681 } },
  { id: '8400414', name: 'Meppel', location: { latitude: 52.6978, longitude: 6.1928 } },
  { id: '8400170', name: 'Harlingen Haven', location: { latitude: 53.1803, longitude: 5.4178 } },
  { id: '8400169', name: 'Harlingen', location: { latitude: 53.1731, longitude: 5.4253 } },
  { id: '8400158', name: 'Franeker', location: { latitude: 53.1875, longitude: 5.5367 } },
  { id: '8400093', name: 'Bolsward', location: { latitude: 53.0600, longitude: 5.5303 } },
  { id: '8400595', name: 'Workum', location: { latitude: 52.9847, longitude: 5.4467 } },
  { id: '8400602', name: 'Stavoren', location: { latitude: 52.8831, longitude: 5.3639 } },
  { id: '8400325', name: 'Veendam', location: { latitude: 53.1064, longitude: 6.8739 } },
  { id: '8400588', name: 'Winschoten', location: { latitude: 53.1436, longitude: 7.0378 } },
  { id: '8400289', name: 'Nieuwe Schans', location: { latitude: 53.1783, longitude: 7.2083 } },
  { id: '8400104', name: 'Delfzijl', location: { latitude: 53.3267, longitude: 6.9206 } },
  { id: '8400073', name: 'Appingedam', location: { latitude: 53.3178, longitude: 6.8606 } },
  { id: '8400281', name: 'Hoogezand-Sappemeer', location: { latitude: 53.1667, longitude: 6.7917 } },
  { id: '8400603', name: 'Stadskanaal', location: { latitude: 52.9869, longitude: 6.9511 } },
  { id: '8400092', name: 'Coevorden', location: { latitude: 52.6619, longitude: 6.7419 } },

  // Lelystad / Almere
  { id: '8400258', name: 'Lelystad Centrum', location: { latitude: 52.5108, longitude: 5.4786 } },
  { id: '8400069', name: 'Almere Centrum', location: { latitude: 52.3739, longitude: 5.2181 } },
  { id: '8400071', name: 'Almere Buiten', location: { latitude: 52.3928, longitude: 5.2628 } },
  { id: '8400605', name: 'Almere Muziekwijk', location: { latitude: 52.3611, longitude: 5.2056 } },
  { id: '8400606', name: 'Almere Parkwijk', location: { latitude: 52.3731, longitude: 5.1792 } },
  { id: '8400076', name: 'Almere Poort', location: { latitude: 52.3347, longitude: 5.1617 } },

  // Maastricht / Venlo / Roermond / Sittard / Heerlen
  { id: '8400399', name: 'Maastricht', location: { latitude: 50.8514, longitude: 5.7019 } },
  { id: '8400400', name: 'Maastricht Noord', location: { latitude: 50.8761, longitude: 5.7108 } },
  { id: '8400173', name: 'Eijsden', location: { latitude: 50.7736, longitude: 5.7186 } },
  { id: '8400574', name: 'Venlo', location: { latitude: 51.3706, longitude: 6.1717 } },
  { id: '8400475', name: 'Roermond', location: { latitude: 51.1961, longitude: 5.9789 } },
  { id: '8400529', name: 'Sittard', location: { latitude: 50.9997, longitude: 5.8714 } },
  { id: '8400192', name: 'Heerlen', location: { latitude: 50.8878, longitude: 5.9847 } },
  { id: '8400383', name: 'Kerkrade Centrum', location: { latitude: 50.8606, longitude: 6.0683 } },
  { id: '8400252', name: 'Landgraaf', location: { latitude: 50.9003, longitude: 6.0231 } },
  { id: '8400593', name: 'Weert', location: { latitude: 51.2522, longitude: 5.7058 } },
  { id: '8400575', name: 'Venray', location: { latitude: 51.5253, longitude: 5.9836 } },
  { id: '8400298', name: 'Cuijk', location: { latitude: 51.7317, longitude: 5.8758 } },
  { id: '8400450', name: 'Ravenstein', location: { latitude: 51.7928, longitude: 5.6444 } },

  // Zeeland
  { id: '8400578', name: 'Middelburg', location: { latitude: 51.5003, longitude: 3.6103 } },
  { id: '8400577', name: 'Vlissingen', location: { latitude: 51.4486, longitude: 3.5742 } },
  { id: '8400200', name: 'Goes', location: { latitude: 51.5064, longitude: 3.8897 } },
  { id: '8400382', name: 'Kapelle-Biezelinge', location: { latitude: 51.4858, longitude: 3.9581 } },
  { id: '8400607', name: 'Kruiningen-Yerseke', location: { latitude: 51.4561, longitude: 4.0461 } },

  // ── Belgium ──────────────────────────────────────────────────────────────

  { id: '8814001', name: 'Brussel-Midi / Bruxelles-Midi', location: { latitude: 50.8353, longitude: 4.3360 } },
  { id: '8814002', name: 'Brussel-Centraal / Bruxelles-Central', location: { latitude: 50.8453, longitude: 4.3570 } },
  { id: '8814003', name: 'Brussel-Noord / Bruxelles-Nord', location: { latitude: 50.8603, longitude: 4.3614 } },
  { id: '8813003', name: 'Antwerpen-Centraal', location: { latitude: 51.2172, longitude: 4.4211 } },
  { id: '8821006', name: 'Gent-Sint-Pieters', location: { latitude: 51.0353, longitude: 3.7106 } },
  { id: '8841004', name: 'Brugge', location: { latitude: 51.1972, longitude: 3.2164 } },
  { id: '8832004', name: 'Liège-Guillemins', location: { latitude: 50.6244, longitude: 5.5656 } },
  { id: '8833001', name: 'Leuven', location: { latitude: 50.8822, longitude: 4.7161 } },
  { id: '8811189', name: 'Mechelen', location: { latitude: 51.0283, longitude: 4.4814 } },
  { id: '8831005', name: 'Hasselt', location: { latitude: 50.9308, longitude: 5.3356 } },
  { id: '8863008', name: 'Namen / Namur', location: { latitude: 50.4661, longitude: 4.8658 } },
  { id: '8871206', name: 'Charleroi-Sud', location: { latitude: 50.4100, longitude: 4.4456 } },
  { id: '8841000', name: 'Oostende', location: { latitude: 51.2300, longitude: 2.9178 } },

  // ── Luxembourg ───────────────────────────────────────────────────────────

  { id: '8200601', name: 'Luxembourg', location: { latitude: 49.5997, longitude: 6.1344 } },

  // ── France ───────────────────────────────────────────────────────────────

  { id: '8727100', name: 'Paris Gare du Nord', location: { latitude: 48.8809, longitude: 2.3553 } },
  { id: '8727113', name: 'Paris Gare de Lyon', location: { latitude: 48.8450, longitude: 2.3739 } },
  { id: '8727103', name: "Paris Gare de l'Est", location: { latitude: 48.8767, longitude: 2.3589 } },
  { id: '8727122', name: 'Paris Montparnasse', location: { latitude: 48.8408, longitude: 2.3200 } },
  { id: '8727110', name: 'Paris Saint-Lazare', location: { latitude: 48.8761, longitude: 2.3250 } },
  { id: '8727104', name: 'Paris Austerlitz', location: { latitude: 48.8431, longitude: 2.3647 } },
  { id: '8700012', name: 'Lyon Part-Dieu', location: { latitude: 45.7606, longitude: 4.8594 } },
  { id: '8700013', name: 'Lyon Perrache', location: { latitude: 45.7489, longitude: 4.8258 } },
  { id: '8700017', name: 'Marseille Saint-Charles', location: { latitude: 43.3028, longitude: 5.3806 } },
  { id: '8700006', name: 'Bordeaux Saint-Jean', location: { latitude: 44.8258, longitude: -0.5558 } },
  { id: '8700014', name: 'Toulouse Matabiau', location: { latitude: 43.6114, longitude: 1.4536 } },
  { id: '8700015', name: 'Nice Ville', location: { latitude: 43.7044, longitude: 7.2619 } },
  { id: '8700020', name: 'Strasbourg', location: { latitude: 48.5853, longitude: 7.7353 } },
  { id: '8700016', name: 'Lille Flandres', location: { latitude: 50.6367, longitude: 3.0706 } },
  { id: '8700301', name: 'Lille Europe', location: { latitude: 50.6386, longitude: 3.0753 } },
  { id: '8700009', name: 'Nantes', location: { latitude: 47.2178, longitude: -1.5419 } },
  { id: '8700021', name: 'Rennes', location: { latitude: 48.1031, longitude: -1.6722 } },
  { id: '8700018', name: 'Montpellier Saint-Roch', location: { latitude: 43.6056, longitude: 3.8797 } },
  { id: '8700007', name: 'Grenoble', location: { latitude: 45.1917, longitude: 5.7156 } },
  { id: '8700008', name: 'Dijon Ville', location: { latitude: 47.3228, longitude: 5.0286 } },
  { id: '8700019', name: 'Reims', location: { latitude: 49.2583, longitude: 4.0339 } },
  { id: '8700022', name: 'Le Mans', location: { latitude: 47.9956, longitude: 0.1931 } },
  { id: '8700023', name: 'Tours', location: { latitude: 47.3839, longitude: 0.6900 } },
  { id: '8700024', name: 'Perpignan', location: { latitude: 42.6983, longitude: 2.8775 } },
  { id: '8700025', name: 'Metz Ville', location: { latitude: 49.1097, longitude: 6.1769 } },
  { id: '8700026', name: 'Nancy Ville', location: { latitude: 48.6894, longitude: 6.1733 } },
  { id: '8700027', name: 'Valenciennes', location: { latitude: 50.3636, longitude: 3.5206 } },
  { id: '8700028', name: 'Dunkerque', location: { latitude: 51.0336, longitude: 2.3769 } },
  { id: '8700029', name: 'Calais Ville', location: { latitude: 50.9511, longitude: 1.8572 } },
  { id: '8700030', name: 'Calais-Fréthun', location: { latitude: 50.9278, longitude: 1.8383 } },

  // ── Germany ──────────────────────────────────────────────────────────────

  { id: '8011160', name: 'Berlin Hbf', location: { latitude: 52.5250, longitude: 13.3694 } },
  { id: '8098160', name: 'Berlin Ostbahnhof', location: { latitude: 52.5103, longitude: 13.4344 } },
  { id: '8000261', name: 'München Hbf', location: { latitude: 48.1403, longitude: 11.5581 } },
  { id: '8000152', name: 'Hamburg Hbf', location: { latitude: 53.5528, longitude: 10.0064 } },
  { id: '8000105', name: 'Frankfurt (Main) Hbf', location: { latitude: 50.1069, longitude: 8.6631 } },
  { id: '8000244', name: 'Köln Hbf', location: { latitude: 50.9428, longitude: 6.9586 } },
  { id: '8000080', name: 'Stuttgart Hbf', location: { latitude: 48.7844, longitude: 9.1828 } },
  { id: '8000068', name: 'Düsseldorf Hbf', location: { latitude: 51.2197, longitude: 6.7942 } },
  { id: '8000078', name: 'Dortmund Hbf', location: { latitude: 51.5175, longitude: 7.4592 } },
  { id: '8000098', name: 'Essen Hbf', location: { latitude: 51.4511, longitude: 7.0133 } },
  { id: '8000183', name: 'Hannover Hbf', location: { latitude: 52.3775, longitude: 9.7411 } },
  { id: '8000284', name: 'Nürnberg Hbf', location: { latitude: 49.4458, longitude: 11.0825 } },
  { id: '8010159', name: 'Leipzig Hbf', location: { latitude: 51.3458, longitude: 12.3819 } },
  { id: '8010085', name: 'Dresden Hbf', location: { latitude: 51.0406, longitude: 13.7328 } },
  { id: '8000036', name: 'Bremen Hbf', location: { latitude: 53.0831, longitude: 8.8133 } },
  { id: '8000044', name: 'Bonn Hbf', location: { latitude: 50.7319, longitude: 7.0972 } },
  { id: '8000245', name: 'Mannheim Hbf', location: { latitude: 49.4797, longitude: 8.4694 } },
  { id: '8000191', name: 'Karlsruhe Hbf', location: { latitude: 48.9936, longitude: 8.4017 } },
  { id: '8000013', name: 'Augsburg Hbf', location: { latitude: 48.3656, longitude: 10.8853 } },
  { id: '8000250', name: 'Wiesbaden Hbf', location: { latitude: 50.0711, longitude: 8.2453 } },
  { id: '8000240', name: 'Mainz Hbf', location: { latitude: 50.0011, longitude: 8.2578 } },
  { id: '8000107', name: 'Freiburg (Breisgau) Hbf', location: { latitude: 47.9978, longitude: 7.8411 } },
  { id: '8000156', name: 'Heidelberg Hbf', location: { latitude: 49.4039, longitude: 8.6753 } },
  { id: '8000001', name: 'Aachen Hbf', location: { latitude: 50.7678, longitude: 6.0911 } },
  { id: '8000263', name: 'Münster (Westf) Hbf', location: { latitude: 51.9561, longitude: 7.6353 } },
  { id: '8000040', name: 'Bochum Hbf', location: { latitude: 51.4789, longitude: 7.2231 } },
  { id: '8000086', name: 'Duisburg Hbf', location: { latitude: 51.4297, longitude: 6.7739 } },
  { id: '8000266', name: 'Wuppertal Hbf', location: { latitude: 51.2544, longitude: 7.1489 } },
  { id: '8000029', name: 'Bielefeld Hbf', location: { latitude: 52.0297, longitude: 8.5325 } },
  { id: '8000192', name: 'Kiel Hbf', location: { latitude: 54.3147, longitude: 10.1319 } },
  { id: '8000237', name: 'Lübeck Hbf', location: { latitude: 53.8703, longitude: 10.6678 } },
  { id: '8010304', name: 'Rostock Hbf', location: { latitude: 54.0783, longitude: 12.1317 } },
  { id: '8010101', name: 'Erfurt Hbf', location: { latitude: 50.9725, longitude: 11.0378 } },
  { id: '8010178', name: 'Jena Paradies', location: { latitude: 50.9267, longitude: 11.5878 } },
  { id: '8010086', name: 'Chemnitz Hbf', location: { latitude: 50.8344, longitude: 12.9231 } },
  { id: '8010224', name: 'Magdeburg Hbf', location: { latitude: 52.1281, longitude: 11.6264 } },
  { id: '8000309', name: 'Regensburg Hbf', location: { latitude: 49.0136, longitude: 12.1011 } },
  { id: '8000170', name: 'Ulm Hbf', location: { latitude: 48.3997, longitude: 9.9822 } },
  { id: '8000298', name: 'Passau Hbf', location: { latitude: 48.5719, longitude: 13.4578 } },
  { id: '8000260', name: 'Würzburg Hbf', location: { latitude: 49.8022, longitude: 9.9353 } },
  { id: '8000096', name: 'Trier Hbf', location: { latitude: 49.7583, longitude: 6.6444 } },
  { id: '8000194', name: 'Koblenz Hbf', location: { latitude: 50.3592, longitude: 7.5889 } },
  { id: '8000283', name: 'Oberhausen Hbf', location: { latitude: 51.4706, longitude: 6.8561 } },
  { id: '8000148', name: 'Gelsenkirchen Hbf', location: { latitude: 51.4983, longitude: 7.1042 } },
  { id: '8000139', name: 'Hagen Hbf', location: { latitude: 51.3614, longitude: 7.4597 } },
  { id: '8000181', name: 'Kassel Hbf', location: { latitude: 51.3192, longitude: 9.4931 } },
  { id: '8000050', name: 'Braunschweig Hbf', location: { latitude: 52.2525, longitude: 10.5397 } },
  { id: '8000268', name: 'Oldenburg (Oldb) Hbf', location: { latitude: 53.1411, longitude: 8.2178 } },
  { id: '8000271', name: 'Osnabrück Hbf', location: { latitude: 52.2728, longitude: 8.0603 } },

  // ── Switzerland ──────────────────────────────────────────────────────────

  { id: '8500010', name: 'Zürich HB', location: { latitude: 47.3783, longitude: 8.5403 } },
  { id: '8501120', name: 'Basel SBB', location: { latitude: 47.5475, longitude: 7.5897 } },
  { id: '8507000', name: 'Bern', location: { latitude: 46.9489, longitude: 7.4394 } },
  { id: '8501008', name: 'Genève-Cornavin', location: { latitude: 46.2103, longitude: 6.1422 } },
  { id: '8501210', name: 'Lausanne', location: { latitude: 46.5169, longitude: 6.6289 } },
  { id: '8505000', name: 'Luzern', location: { latitude: 47.0503, longitude: 8.3097 } },
  { id: '8501400', name: 'Interlaken Ost', location: { latitude: 46.6908, longitude: 7.8697 } },
  { id: '8501401', name: 'Interlaken West', location: { latitude: 46.6869, longitude: 7.8531 } },
  { id: '8501609', name: 'Brig', location: { latitude: 46.3178, longitude: 7.9878 } },
  { id: '8501621', name: 'Zermatt', location: { latitude: 46.0239, longitude: 7.7483 } },
  { id: '8506000', name: 'St. Gallen', location: { latitude: 47.4231, longitude: 9.3697 } },
  { id: '8509000', name: 'Chur', location: { latitude: 46.8503, longitude: 9.5306 } },
  { id: '8505300', name: 'Lugano', location: { latitude: 46.0047, longitude: 8.9481 } },
  { id: '8505400', name: 'Locarno', location: { latitude: 46.1672, longitude: 8.7978 } },
  { id: '8507100', name: 'Thun', location: { latitude: 46.7531, longitude: 7.6317 } },
  { id: '8504100', name: 'Biel/Bienne', location: { latitude: 47.1375, longitude: 7.2442 } },
  { id: '8500244', name: 'Winterthur', location: { latitude: 47.5003, longitude: 8.7239 } },
  { id: '8509411', name: 'St. Moritz', location: { latitude: 46.4986, longitude: 9.8444 } },

  // ── Austria ──────────────────────────────────────────────────────────────

  { id: '8100002', name: 'Wien Hbf', location: { latitude: 48.1847, longitude: 16.3767 } },
  { id: '8100001', name: 'Wien Meidling', location: { latitude: 48.1739, longitude: 16.3353 } },
  { id: '8100003', name: 'Wien Westbahnhof', location: { latitude: 48.1967, longitude: 16.3378 } },
  { id: '8100173', name: 'Salzburg Hbf', location: { latitude: 47.8131, longitude: 13.0456 } },
  { id: '8100013', name: 'Innsbruck Hbf', location: { latitude: 47.2628, longitude: 11.4003 } },
  { id: '8100009', name: 'Graz Hbf', location: { latitude: 47.0728, longitude: 15.4197 } },
  { id: '8100014', name: 'Linz Hbf', location: { latitude: 48.2903, longitude: 14.2900 } },
  { id: '8100010', name: 'Klagenfurt Hbf', location: { latitude: 46.6228, longitude: 14.3081 } },
  { id: '8100707', name: 'Villach Hbf', location: { latitude: 46.6100, longitude: 13.8483 } },
  { id: '8100200', name: 'Bregenz', location: { latitude: 47.5033, longitude: 9.7475 } },
  { id: '8100037', name: 'Feldkirch', location: { latitude: 47.2378, longitude: 9.5989 } },
  { id: '8100038', name: 'Sankt Anton am Arlberg', location: { latitude: 47.1292, longitude: 10.2664 } },
  { id: '8100039', name: 'Zell am See', location: { latitude: 47.3239, longitude: 12.7919 } },
  { id: '8100040', name: 'Kitzbühel', location: { latitude: 47.4458, longitude: 12.3933 } },
  { id: '8100041', name: 'Hallstatt', location: { latitude: 47.5622, longitude: 13.6489 } },

  // ── Italy ────────────────────────────────────────────────────────────────

  { id: '8300003', name: 'Roma Termini', location: { latitude: 41.9006, longitude: 12.5019 } },
  { id: '8300004', name: 'Roma Tiburtina', location: { latitude: 41.9092, longitude: 12.5311 } },
  { id: '8300014', name: 'Milano Centrale', location: { latitude: 45.4858, longitude: 9.2047 } },
  { id: '8300015', name: 'Milano Porta Garibaldi', location: { latitude: 45.4847, longitude: 9.1872 } },
  { id: '8300054', name: 'Venezia Santa Lucia', location: { latitude: 45.4414, longitude: 12.3219 } },
  { id: '8300055', name: 'Venezia Mestre', location: { latitude: 45.4792, longitude: 12.2317 } },
  { id: '8300016', name: 'Firenze Santa Maria Novella', location: { latitude: 43.7758, longitude: 11.2486 } },
  { id: '8300017', name: 'Napoli Centrale', location: { latitude: 40.8528, longitude: 14.2733 } },
  { id: '8300018', name: 'Torino Porta Nuova', location: { latitude: 45.0631, longitude: 7.6783 } },
  { id: '8300019', name: 'Bologna Centrale', location: { latitude: 44.5058, longitude: 11.3428 } },
  { id: '8300020', name: 'Genova Piazza Principe', location: { latitude: 44.4178, longitude: 8.9231 } },
  { id: '8300021', name: 'Bari Centrale', location: { latitude: 41.1183, longitude: 16.8703 } },
  { id: '8300022', name: 'Palermo Centrale', location: { latitude: 38.1117, longitude: 13.3433 } },
  { id: '8300023', name: 'Catania Centrale', location: { latitude: 37.5061, longitude: 15.0867 } },
  { id: '8300024', name: 'Verona Porta Nuova', location: { latitude: 45.4289, longitude: 10.9825 } },
  { id: '8300025', name: 'Padova', location: { latitude: 45.4122, longitude: 11.8825 } },
  { id: '8300026', name: 'Trieste Centrale', location: { latitude: 45.6556, longitude: 13.7747 } },
  { id: '8300027', name: 'Trento', location: { latitude: 46.0728, longitude: 11.1194 } },
  { id: '8300028', name: 'Bolzano/Bozen', location: { latitude: 46.4969, longitude: 11.3578 } },
  { id: '8300029', name: 'Pisa Centrale', location: { latitude: 43.7094, longitude: 10.3947 } },
  { id: '8300030', name: 'Perugia', location: { latitude: 43.1072, longitude: 12.3894 } },
  { id: '8300031', name: 'Ancona', location: { latitude: 43.6153, longitude: 13.5011 } },
  { id: '8300032', name: 'Rimini', location: { latitude: 44.0611, longitude: 12.5628 } },
  { id: '8300033', name: 'La Spezia Centrale', location: { latitude: 44.1003, longitude: 9.8183 } },
  { id: '8300034', name: 'Aosta', location: { latitude: 45.7378, longitude: 7.3153 } },
  { id: '8300035', name: 'Reggio Calabria Centrale', location: { latitude: 38.1131, longitude: 15.6472 } },

  // ── Spain ────────────────────────────────────────────────────────────────

  { id: '7100001', name: 'Madrid Atocha', location: { latitude: 40.4064, longitude: -3.6892 } },
  { id: '7100010', name: 'Madrid Chamartín', location: { latitude: 40.4728, longitude: -3.6822 } },
  { id: '7100002', name: 'Barcelona Sants', location: { latitude: 41.3794, longitude: 2.1400 } },
  { id: '7100011', name: 'Barcelona França', location: { latitude: 41.3856, longitude: 2.1853 } },
  { id: '7100003', name: 'Valencia Joaquín Sorolla', location: { latitude: 39.4658, longitude: -0.3769 } },
  { id: '7100004', name: 'Sevilla Santa Justa', location: { latitude: 37.3922, longitude: -5.9764 } },
  { id: '7100005', name: 'Bilbao Abando', location: { latitude: 43.2569, longitude: -2.9250 } },
  { id: '7100006', name: 'Zaragoza Delicias', location: { latitude: 41.6553, longitude: -1.0050 } },
  { id: '7100007', name: 'Málaga María Zambrano', location: { latitude: 36.7119, longitude: -4.4317 } },
  { id: '7100008', name: 'Granada', location: { latitude: 37.1750, longitude: -3.6089 } },
  { id: '7100009', name: 'Córdoba', location: { latitude: 37.8894, longitude: -4.7889 } },
  { id: '7100012', name: 'Alicante', location: { latitude: 38.3456, longitude: -0.4856 } },
  { id: '7100013', name: 'San Sebastián/Donostia', location: { latitude: 43.3194, longitude: -1.9786 } },
  { id: '7100014', name: 'Santander', location: { latitude: 43.4611, longitude: -3.8036 } },
  { id: '7100015', name: 'Vigo', location: { latitude: 42.2311, longitude: -8.7231 } },
  { id: '7100016', name: 'Santiago de Compostela', location: { latitude: 42.8725, longitude: -8.5444 } },
  { id: '7100017', name: 'Pamplona', location: { latitude: 42.8194, longitude: -1.6458 } },
  { id: '7100018', name: 'Lleida', location: { latitude: 41.6106, longitude: 0.6267 } },
  { id: '7100019', name: 'Tarragona', location: { latitude: 41.1175, longitude: 1.2489 } },
  { id: '7100020', name: 'Girona', location: { latitude: 41.9844, longitude: 2.8203 } },
  { id: '7100021', name: 'Murcia del Carmen', location: { latitude: 37.9900, longitude: -1.1308 } },
  { id: '7100022', name: 'Toledo', location: { latitude: 39.8578, longitude: -4.0253 } },
  { id: '7100023', name: 'Valladolid Campo Grande', location: { latitude: 41.6528, longitude: -4.7242 } },
  { id: '7100024', name: 'Burgos Rosa de Lima', location: { latitude: 42.3494, longitude: -3.6883 } },
  { id: '7100025', name: 'León', location: { latitude: 42.6022, longitude: -5.5703 } },
  { id: '7100026', name: 'Salamanca', location: { latitude: 40.9586, longitude: -5.6650 } },

  // ── Portugal ─────────────────────────────────────────────────────────────

  { id: '9400001', name: 'Lisboa Santa Apolónia', location: { latitude: 38.7131, longitude: -9.1194 } },
  { id: '9400003', name: 'Lisboa Oriente', location: { latitude: 38.7678, longitude: -9.0981 } },
  { id: '9400004', name: 'Porto São Bento', location: { latitude: 41.1461, longitude: -8.6106 } },
  { id: '9400002', name: 'Porto Campanhã', location: { latitude: 41.1489, longitude: -8.5850 } },
  { id: '9400005', name: 'Faro', location: { latitude: 37.0192, longitude: -7.9344 } },
  { id: '9400006', name: 'Coimbra-B', location: { latitude: 40.2072, longitude: -8.4233 } },
  { id: '9400007', name: 'Braga', location: { latitude: 41.5519, longitude: -8.4275 } },
  { id: '9400008', name: 'Évora', location: { latitude: 38.5678, longitude: -7.9056 } },
  { id: '9400009', name: 'Sintra', location: { latitude: 38.7994, longitude: -9.3878 } },
  { id: '9400010', name: 'Cascais', location: { latitude: 38.6972, longitude: -9.4214 } },
  { id: '9400011', name: 'Setúbal', location: { latitude: 38.5233, longitude: -8.8961 } },

  // ── United Kingdom ───────────────────────────────────────────────────────

  { id: '7054310', name: 'London St Pancras International', location: { latitude: 51.5310, longitude: -0.1228 } },
  { id: '7054311', name: "London King's Cross", location: { latitude: 51.5308, longitude: -0.1231 } },
  { id: '7054400', name: 'London Waterloo', location: { latitude: 51.5035, longitude: -0.1134 } },
  { id: '7054200', name: 'London Paddington', location: { latitude: 51.5154, longitude: -0.1755 } },
  { id: '7054600', name: 'London Victoria', location: { latitude: 51.4954, longitude: -0.1444 } },
  { id: '7054500', name: 'London Euston', location: { latitude: 51.5283, longitude: -0.1339 } },
  { id: '7054700', name: 'London Liverpool Street', location: { latitude: 51.5178, longitude: -0.0814 } },
  { id: '7054800', name: 'London Charing Cross', location: { latitude: 51.5081, longitude: -0.1247 } },
  { id: '7054003', name: 'Manchester Piccadilly', location: { latitude: 53.4775, longitude: -2.2311 } },
  { id: '7054010', name: 'Birmingham New Street', location: { latitude: 52.4775, longitude: -1.9003 } },
  { id: '7054011', name: 'Liverpool Lime Street', location: { latitude: 53.4078, longitude: -2.9778 } },
  { id: '7054012', name: 'Leeds', location: { latitude: 53.7950, longitude: -1.5483 } },
  { id: '7054013', name: 'Sheffield', location: { latitude: 53.3783, longitude: -1.4633 } },
  { id: '7054014', name: 'Bristol Temple Meads', location: { latitude: 51.4492, longitude: -2.5811 } },
  { id: '7054001', name: 'Edinburgh Waverley', location: { latitude: 55.9522, longitude: -3.1894 } },
  { id: '7054002', name: 'Glasgow Central', location: { latitude: 55.8586, longitude: -4.2578 } },
  { id: '7054015', name: 'Cardiff Central', location: { latitude: 51.4753, longitude: -3.1786 } },
  { id: '7054016', name: 'Newcastle upon Tyne', location: { latitude: 54.9681, longitude: -1.6108 } },
  { id: '7054017', name: 'Nottingham', location: { latitude: 52.9473, longitude: -1.1456 } },
  { id: '7054018', name: 'Southampton Central', location: { latitude: 50.9086, longitude: -1.4128 } },
  { id: '7054019', name: 'Brighton', location: { latitude: 50.8292, longitude: -0.1408 } },
  { id: '7054020', name: 'Oxford', location: { latitude: 51.7533, longitude: -1.2697 } },
  { id: '7054021', name: 'Cambridge', location: { latitude: 52.1944, longitude: 0.1372 } },
  { id: '7054022', name: 'York', location: { latitude: 53.9583, longitude: -1.0931 } },
  { id: '7054023', name: 'Bath Spa', location: { latitude: 51.3789, longitude: -2.3594 } },
  { id: '7054024', name: 'Exeter St Davids', location: { latitude: 50.7267, longitude: -3.5261 } },
  { id: '7054025', name: 'Plymouth', location: { latitude: 50.3778, longitude: -4.1431 } },
  { id: '7054026', name: 'Leicester', location: { latitude: 52.6339, longitude: -1.1261 } },
  { id: '7054027', name: 'Coventry', location: { latitude: 52.4006, longitude: -1.5139 } },
  { id: '7054028', name: 'Reading', location: { latitude: 51.4583, longitude: -0.9711 } },
  { id: '7054029', name: 'Gatwick Airport', location: { latitude: 51.1564, longitude: -0.1611 } },
  { id: '7054030', name: 'Stansted Airport', location: { latitude: 51.8856, longitude: 0.2697 } },

  // ── Ireland ──────────────────────────────────────────────────────────────

  { id: '6000001', name: 'Dublin Heuston', location: { latitude: 53.3464, longitude: -6.2978 } },
  { id: '6000002', name: 'Dublin Connolly', location: { latitude: 53.3533, longitude: -6.2489 } },
  { id: '6000003', name: 'Cork Kent', location: { latitude: 51.9011, longitude: -8.4644 } },
  { id: '6000004', name: 'Galway', location: { latitude: 53.2772, longitude: -9.0503 } },
  { id: '6000005', name: 'Limerick', location: { latitude: 52.6603, longitude: -8.6283 } },
  { id: '6000006', name: 'Waterford', location: { latitude: 52.2581, longitude: -7.1153 } },

  // ── Scandinavia ──────────────────────────────────────────────────────────

  { id: '8600020', name: 'København H', location: { latitude: 55.6726, longitude: 12.5647 } },
  { id: '8600626', name: 'Aarhus H', location: { latitude: 56.1503, longitude: 10.2044 } },
  { id: '7400004', name: 'Malmö Centralstation', location: { latitude: 55.6097, longitude: 13.0019 } },
  { id: '7400001', name: 'Stockholm Centralstation', location: { latitude: 59.3308, longitude: 18.0589 } },
  { id: '7400002', name: 'Göteborg Centralstation', location: { latitude: 57.7086, longitude: 11.9733 } },
  { id: '7400005', name: 'Uppsala', location: { latitude: 59.8583, longitude: 17.6453 } },
  { id: '7400006', name: 'Lund', location: { latitude: 55.7053, longitude: 13.1864 } },
  { id: '7400007', name: 'Helsingborg Centralstation', location: { latitude: 56.0447, longitude: 12.6958 } },
  { id: '7600001', name: 'Oslo Sentralstasjon', location: { latitude: 59.9110, longitude: 10.7525 } },
  { id: '7600002', name: 'Bergen stasjon', location: { latitude: 60.3908, longitude: 5.3336 } },
  { id: '7600003', name: 'Trondheim Sentralstasjon', location: { latitude: 63.4350, longitude: 10.3997 } },
  { id: '7600004', name: 'Stavanger', location: { latitude: 58.9697, longitude: 5.7333 } },
  { id: '1000001', name: 'Helsinki Central', location: { latitude: 60.1719, longitude: 24.9414 } },
  { id: '1000002', name: 'Turku', location: { latitude: 60.4550, longitude: 22.2633 } },
  { id: '1000003', name: 'Tampere', location: { latitude: 61.4978, longitude: 23.7758 } },
  { id: '1000004', name: 'Oulu', location: { latitude: 64.9958, longitude: 25.3914 } },

  // ── Czech Republic ───────────────────────────────────────────────────────

  { id: '5470001', name: 'Praha hlavní nádraží', location: { latitude: 50.0831, longitude: 14.4356 } },
  { id: '5470003', name: 'Praha Holešovice', location: { latitude: 50.1003, longitude: 14.4481 } },
  { id: '5470002', name: 'Brno hlavní nádraží', location: { latitude: 49.1906, longitude: 16.6128 } },
  { id: '5470004', name: 'Ostrava hlavní nádraží', location: { latitude: 49.8353, longitude: 18.2928 } },
  { id: '5470005', name: 'Plzeň hlavní nádraží', location: { latitude: 49.7444, longitude: 13.3836 } },
  { id: '5470006', name: 'Olomouc', location: { latitude: 49.5894, longitude: 17.2503 } },

  // ── Slovakia ─────────────────────────────────────────────────────────────

  { id: '5610001', name: 'Bratislava hlavná stanica', location: { latitude: 48.1572, longitude: 17.1072 } },
  { id: '5610002', name: 'Košice', location: { latitude: 48.7169, longitude: 21.2572 } },

  // ── Hungary ──────────────────────────────────────────────────────────────

  { id: '5510001', name: 'Budapest Keleti', location: { latitude: 47.5003, longitude: 19.0839 } },
  { id: '5510002', name: 'Budapest Nyugati', location: { latitude: 47.5097, longitude: 19.0556 } },
  { id: '5510003', name: 'Budapest Déli', location: { latitude: 47.4881, longitude: 19.0281 } },
  { id: '5510004', name: 'Győr', location: { latitude: 47.6881, longitude: 17.6347 } },
  { id: '5510005', name: 'Pécs', location: { latitude: 46.0819, longitude: 18.2181 } },
  { id: '5510006', name: 'Debrecen', location: { latitude: 47.5261, longitude: 21.6256 } },
  { id: '5510007', name: 'Miskolc', location: { latitude: 48.1039, longitude: 20.7778 } },

  // ── Poland ───────────────────────────────────────────────────────────────

  { id: '5100001', name: 'Warszawa Centralna', location: { latitude: 52.2286, longitude: 21.0033 } },
  { id: '5100012', name: 'Warszawa Wschodnia', location: { latitude: 52.2519, longitude: 21.0456 } },
  { id: '5100005', name: 'Kraków Główny', location: { latitude: 50.0644, longitude: 19.9474 } },
  { id: '5100002', name: 'Gdańsk Główny', location: { latitude: 54.3564, longitude: 18.6436 } },
  { id: '5100003', name: 'Wrocław Główny', location: { latitude: 51.0989, longitude: 17.0369 } },
  { id: '5100011', name: 'Poznań Główny', location: { latitude: 52.4028, longitude: 16.9203 } },
  { id: '5100013', name: 'Łódź Fabryczna', location: { latitude: 51.7769, longitude: 19.4586 } },
  { id: '5100014', name: 'Katowice', location: { latitude: 50.2572, longitude: 19.0172 } },
  { id: '5100015', name: 'Lublin', location: { latitude: 51.2472, longitude: 22.5681 } },
  { id: '5100016', name: 'Szczecin Główny', location: { latitude: 53.4286, longitude: 14.5553 } },
  { id: '5100017', name: 'Bydgoszcz Główna', location: { latitude: 53.1267, longitude: 18.0019 } },
  { id: '5100018', name: 'Białystok', location: { latitude: 53.1358, longitude: 23.1483 } },
  { id: '5100006', name: 'Bochnia', location: { latitude: 49.9694, longitude: 20.4314 } },
  { id: '5100007', name: 'Tarnów', location: { latitude: 50.0131, longitude: 20.9869 } },
  { id: '5100009', name: 'Krynica-Zdrój', location: { latitude: 49.4167, longitude: 20.9583 } },
  { id: '5100010', name: 'Nowy Sącz', location: { latitude: 49.6231, longitude: 20.6947 } },
  { id: '5100019', name: 'Zakopane', location: { latitude: 49.2989, longitude: 19.9578 } },

  // ── Romania ──────────────────────────────────────────────────────────────

  { id: '5310001', name: 'București Nord', location: { latitude: 44.4453, longitude: 26.0972 } },
  { id: '5310002', name: 'Cluj-Napoca', location: { latitude: 46.7703, longitude: 23.5906 } },
  { id: '5310003', name: 'Brașov', location: { latitude: 45.6453, longitude: 25.5897 } },
  { id: '5310004', name: 'Timișoara Nord', location: { latitude: 45.7533, longitude: 21.2211 } },
  { id: '5310005', name: 'Iași', location: { latitude: 47.1586, longitude: 27.5894 } },
  { id: '5310006', name: 'Constanța', location: { latitude: 44.1811, longitude: 28.6428 } },

  // ── Bulgaria ─────────────────────────────────────────────────────────────

  { id: '5200001', name: 'Sofia Central', location: { latitude: 42.7128, longitude: 23.3197 } },
  { id: '5200002', name: 'Plovdiv', location: { latitude: 42.1489, longitude: 24.7492 } },
  { id: '5200003', name: 'Varna', location: { latitude: 43.2053, longitude: 27.9167 } },
  { id: '5200004', name: 'Burgas', location: { latitude: 42.4978, longitude: 27.4694 } },

  // ── Serbia ───────────────────────────────────────────────────────────────

  { id: '7210001', name: 'Beograd Centar', location: { latitude: 44.8081, longitude: 20.4686 } },
  { id: '7210002', name: 'Novi Sad', location: { latitude: 45.2592, longitude: 19.8433 } },

  // ── Croatia ──────────────────────────────────────────────────────────────

  { id: '7840001', name: 'Zagreb Glavni kolodvor', location: { latitude: 45.8050, longitude: 15.9783 } },
  { id: '7840002', name: 'Split', location: { latitude: 43.5089, longitude: 16.4417 } },
  { id: '7840003', name: 'Rijeka', location: { latitude: 45.3281, longitude: 14.4406 } },

  // ── Slovenia ─────────────────────────────────────────────────────────────

  { id: '7900001', name: 'Ljubljana', location: { latitude: 46.0561, longitude: 14.5069 } },
  { id: '7900002', name: 'Maribor', location: { latitude: 46.5614, longitude: 15.6453 } },

  // ── Greece ───────────────────────────────────────────────────────────────

  { id: '7300001', name: 'Athina Larisis', location: { latitude: 37.9953, longitude: 23.7214 } },
  { id: '7300002', name: 'Thessaloniki', location: { latitude: 40.6417, longitude: 22.9325 } },

  // ── Turkey ───────────────────────────────────────────────────────────────

  { id: '7730001', name: 'Istanbul Sirkeci', location: { latitude: 41.0183, longitude: 28.9744 } },
  { id: '7730002', name: 'Istanbul Haydarpaşa', location: { latitude: 40.9997, longitude: 29.0214 } },
  { id: '7730003', name: 'Ankara', location: { latitude: 39.9097, longitude: 32.8514 } },
  { id: '7730004', name: 'İzmir Alsancak', location: { latitude: 38.4186, longitude: 27.1331 } },
  { id: '7730005', name: 'Bursa', location: { latitude: 40.2003, longitude: 29.0603 } },

  // ── Russia ───────────────────────────────────────────────────────────────

  { id: '2000001', name: 'Moskva Yaroslavsky', location: { latitude: 55.7761, longitude: 37.6581 } },
  { id: '2000002', name: 'Moskva Kievsky', location: { latitude: 55.7436, longitude: 37.5667 } },
  { id: '2000003', name: 'Sankt-Peterburg Glavny', location: { latitude: 59.9297, longitude: 30.3608 } },
  { id: '2000004', name: 'Novosibirsk Glavny', location: { latitude: 55.0272, longitude: 82.9031 } },

  // ── Japan ────────────────────────────────────────────────────────────────

  { id: '4000001', name: 'Tokyo', location: { latitude: 35.6812, longitude: 139.7671 } },
  { id: '4000002', name: 'Shinjuku', location: { latitude: 35.6896, longitude: 139.7006 } },
  { id: '4000003', name: 'Shibuya', location: { latitude: 35.6580, longitude: 139.7016 } },
  { id: '4000004', name: 'Ueno', location: { latitude: 35.7141, longitude: 139.7774 } },
  { id: '4000005', name: 'Shinagawa', location: { latitude: 35.6286, longitude: 139.7386 } },
  { id: '4000006', name: 'Harajuku', location: { latitude: 35.6702, longitude: 139.7027 } },
  { id: '4000007', name: 'Akihabara', location: { latitude: 35.6981, longitude: 139.7731 } },
  { id: '4000008', name: 'Osaka', location: { latitude: 34.7024, longitude: 135.4959 } },
  { id: '4000009', name: 'Shin-Osaka', location: { latitude: 34.7333, longitude: 135.5000 } },
  { id: '4000010', name: 'Namba', location: { latitude: 34.6653, longitude: 135.5019 } },
  { id: '4000011', name: 'Kyoto', location: { latitude: 34.9858, longitude: 135.7589 } },
  { id: '4000012', name: 'Nagoya', location: { latitude: 35.1709, longitude: 136.8815 } },
  { id: '4000013', name: 'Hiroshima', location: { latitude: 34.3983, longitude: 132.4756 } },
  { id: '4000014', name: 'Sapporo', location: { latitude: 43.0689, longitude: 141.3508 } },
  { id: '4000015', name: 'Hakata (Fukuoka)', location: { latitude: 33.5897, longitude: 130.4208 } },
  { id: '4000016', name: 'Kobe', location: { latitude: 34.6795, longitude: 135.1886 } },
  { id: '4000017', name: 'Yokohama', location: { latitude: 35.4657, longitude: 139.6220 } },
  { id: '4000018', name: 'Sendai', location: { latitude: 38.2597, longitude: 140.8819 } },
  { id: '4000019', name: 'Nara', location: { latitude: 34.6858, longitude: 135.8328 } },
  { id: '4000020', name: 'Kamakura', location: { latitude: 35.3197, longitude: 139.5506 } },
  { id: '4000021', name: 'Nikkō', location: { latitude: 36.7583, longitude: 139.5989 } },
  { id: '4000022', name: 'Hakone-Yumoto', location: { latitude: 35.2336, longitude: 139.0536 } },

  // ── China ────────────────────────────────────────────────────────────────

  { id: '3100001', name: 'Beijing South', location: { latitude: 39.8653, longitude: 116.3803 } },
  { id: '3100002', name: 'Beijing West', location: { latitude: 39.8981, longitude: 116.3222 } },
  { id: '3100003', name: 'Beijing North', location: { latitude: 39.9481, longitude: 116.3553 } },
  { id: '3100004', name: 'Shanghai Hongqiao', location: { latitude: 31.1972, longitude: 121.3253 } },
  { id: '3100005', name: 'Shanghai', location: { latitude: 31.2497, longitude: 121.4556 } },
  { id: '3100006', name: 'Guangzhou South', location: { latitude: 22.8097, longitude: 113.2650 } },
  { id: '3100007', name: 'Shenzhen North', location: { latitude: 22.6097, longitude: 114.0281 } },
  { id: '3100008', name: 'Chengdu East', location: { latitude: 30.6592, longitude: 104.1422 } },
  { id: '3100009', name: 'Wuhan', location: { latitude: 30.5972, longitude: 114.2736 } },
  { id: '3100010', name: "Xi'an North", location: { latitude: 34.3608, longitude: 108.9231 } },
  { id: '3100011', name: 'Chongqing North', location: { latitude: 29.7050, longitude: 106.5603 } },
  { id: '3100012', name: 'Nanjing South', location: { latitude: 31.9614, longitude: 118.7972 } },
  { id: '3100013', name: 'Hangzhou East', location: { latitude: 30.2911, longitude: 120.2197 } },
  { id: '3100014', name: 'Suzhou', location: { latitude: 31.3181, longitude: 120.6258 } },
  { id: '3100015', name: 'Qingdao', location: { latitude: 36.0672, longitude: 120.3803 } },

  // ── India ────────────────────────────────────────────────────────────────

  { id: '5000001', name: 'Mumbai CST', location: { latitude: 18.9400, longitude: 72.8353 } },
  { id: '5000002', name: 'Mumbai Central', location: { latitude: 18.9694, longitude: 72.8197 } },
  { id: '5000003', name: 'New Delhi', location: { latitude: 28.6414, longitude: 77.2194 } },
  { id: '5000004', name: 'Delhi Hazrat Nizamuddin', location: { latitude: 28.5831, longitude: 77.2500 } },
  { id: '5000005', name: 'Kolkata Howrah', location: { latitude: 22.5831, longitude: 88.3422 } },
  { id: '5000006', name: 'Chennai Central', location: { latitude: 13.0831, longitude: 80.2750 } },
  { id: '5000007', name: 'Bengaluru City Junction', location: { latitude: 12.9775, longitude: 77.5704 } },
  { id: '5000008', name: 'Hyderabad Secunderabad', location: { latitude: 17.4336, longitude: 78.5003 } },
  { id: '5000009', name: 'Ahmedabad Junction', location: { latitude: 23.0258, longitude: 72.6033 } },
  { id: '5000010', name: 'Pune Junction', location: { latitude: 18.5281, longitude: 73.8742 } },
  { id: '5000011', name: 'Jaipur Junction', location: { latitude: 26.9222, longitude: 75.7892 } },
  { id: '5000012', name: 'Agra Cantonment', location: { latitude: 27.1653, longitude: 77.9653 } },
  { id: '5000013', name: 'Varanasi Junction', location: { latitude: 25.3186, longitude: 83.0131 } },
  { id: '5000014', name: 'Amritsar', location: { latitude: 31.6281, longitude: 74.8703 } },
  { id: '5000015', name: 'Goa Madgaon', location: { latitude: 15.3731, longitude: 73.9575 } },

  // ── USA ──────────────────────────────────────────────────────────────────

  { id: '9901001', name: 'New York Penn Station', location: { latitude: 40.7506, longitude: -73.9939 } },
  { id: '9901002', name: 'New York Grand Central', location: { latitude: 40.7527, longitude: -73.9772 } },
  { id: '9901003', name: 'Chicago Union Station', location: { latitude: 41.8786, longitude: -87.6397 } },
  { id: '9901004', name: 'Los Angeles Union Station', location: { latitude: 34.0561, longitude: -118.2361 } },
  { id: '9901005', name: 'Washington DC Union Station', location: { latitude: 38.8972, longitude: -77.0064 } },
  { id: '9901006', name: 'Boston South Station', location: { latitude: 42.3519, longitude: -71.0553 } },
  { id: '9901007', name: 'Philadelphia 30th Street', location: { latitude: 39.9564, longitude: -75.1823 } },
  { id: '9901008', name: 'Seattle King Street', location: { latitude: 47.5986, longitude: -122.3300 } },
  { id: '9901009', name: 'Miami Central (MiamiCentral)', location: { latitude: 25.7795, longitude: -80.1975 } },
  { id: '9901010', name: 'Denver Union Station', location: { latitude: 39.7528, longitude: -105.0006 } },
  { id: '9901011', name: 'New Orleans Union Passenger Terminal', location: { latitude: 29.9447, longitude: -90.0756 } },
  { id: '9901012', name: 'Baltimore Penn Station', location: { latitude: 39.3411, longitude: -76.6186 } },
  { id: '9901013', name: 'Portland Union Station', location: { latitude: 45.5289, longitude: -122.6775 } },
  { id: '9901014', name: 'Dallas Union Station', location: { latitude: 32.7792, longitude: -96.7983 } },
  { id: '9901015', name: 'Atlanta Peachtree Station', location: { latitude: 33.7706, longitude: -84.3864 } },
  { id: '9901016', name: 'Minneapolis Target Field', location: { latitude: 44.9828, longitude: -93.2783 } },

  // ── Canada ───────────────────────────────────────────────────────────────

  { id: '9902001', name: 'Toronto Union Station', location: { latitude: 43.6453, longitude: -79.3806 } },
  { id: '9902002', name: 'Montréal Central', location: { latitude: 45.4994, longitude: -73.5683 } },
  { id: '9902003', name: 'Vancouver Pacific Central', location: { latitude: 49.2736, longitude: -123.0994 } },
  { id: '9902004', name: 'Ottawa', location: { latitude: 45.4186, longitude: -75.6911 } },
  { id: '9902005', name: 'Québec City', location: { latitude: 46.8289, longitude: -71.2139 } },
  { id: '9902006', name: 'Calgary', location: { latitude: 51.0444, longitude: -114.0719 } },
  { id: '9902007', name: 'Edmonton', location: { latitude: 53.5444, longitude: -113.4908 } },
  { id: '9902008', name: 'Winnipeg Union Station', location: { latitude: 49.8950, longitude: -97.1381 } },

  // ── Australia ────────────────────────────────────────────────────────────

  { id: '9800001', name: 'Sydney Central', location: { latitude: -33.8831, longitude: 151.2064 } },
  { id: '9800002', name: 'Melbourne Southern Cross', location: { latitude: -37.8183, longitude: 144.9525 } },
  { id: '9800003', name: 'Brisbane Central', location: { latitude: -27.4644, longitude: 153.0261 } },
  { id: '9800004', name: 'Perth Esplanade', location: { latitude: -31.9503, longitude: 115.8589 } },
  { id: '9800005', name: 'Adelaide Central', location: { latitude: -34.9253, longitude: 138.5997 } },
  { id: '9800006', name: 'Canberra', location: { latitude: -35.3075, longitude: 149.1347 } },

  // ── New Zealand ──────────────────────────────────────────────────────────

  { id: '9850001', name: 'Auckland Strand', location: { latitude: -36.8461, longitude: 174.7714 } },
  { id: '9850002', name: 'Wellington', location: { latitude: -41.2789, longitude: 174.7806 } },

  // ── South Africa ─────────────────────────────────────────────────────────

  { id: '6500001', name: 'Cape Town', location: { latitude: -33.9258, longitude: 18.4233 } },
  { id: '6500002', name: 'Johannesburg Park Station', location: { latitude: -26.2006, longitude: 28.0436 } },
  { id: '6500003', name: 'Durban', location: { latitude: -29.8583, longitude: 31.0114 } },

  // ── Brazil ───────────────────────────────────────────────────────────────

  { id: '9700001', name: 'São Paulo Luz', location: { latitude: -23.5347, longitude: -46.6353 } },
  { id: '9700002', name: 'Rio de Janeiro Central', location: { latitude: -22.9003, longitude: -43.1797 } },
  { id: '9700003', name: 'Curitiba', location: { latitude: -25.4178, longitude: -49.2653 } },
  { id: '9700004', name: 'Belo Horizonte', location: { latitude: -19.9192, longitude: -43.9386 } },
  { id: '9700005', name: 'Brasília', location: { latitude: -15.7756, longitude: -47.9344 } },

  // ── Argentina ────────────────────────────────────────────────────────────

  { id: '9710001', name: 'Buenos Aires Retiro', location: { latitude: -34.5917, longitude: -58.3742 } },
  { id: '9710002', name: 'Córdoba', location: { latitude: -31.4119, longitude: -64.1886 } },
  { id: '9710003', name: 'Rosario Norte', location: { latitude: -32.9394, longitude: -60.6972 } },

  // ── Chile ────────────────────────────────────────────────────────────────

  { id: '9720001', name: 'Santiago Alameda', location: { latitude: -33.4589, longitude: -70.6783 } },

  // ── Mexico ───────────────────────────────────────────────────────────────

  { id: '9730001', name: 'Ciudad de México Buenavista', location: { latitude: 19.4503, longitude: -99.1497 } },
  { id: '9730002', name: 'Guadalajara', location: { latitude: 20.6722, longitude: -103.3481 } },
  { id: '9730003', name: 'Monterrey', location: { latitude: 25.6753, longitude: -100.3189 } },

  // ── Morocco ──────────────────────────────────────────────────────────────

  { id: '6100001', name: 'Casablanca Casa Port', location: { latitude: 33.5978, longitude: -7.6189 } },
  { id: '6100002', name: 'Marrakech', location: { latitude: 31.6253, longitude: -8.0133 } },
  { id: '6100003', name: 'Fes', location: { latitude: 34.0428, longitude: -5.0083 } },
  { id: '6100004', name: 'Rabat Ville', location: { latitude: 34.0203, longitude: -6.8417 } },
  { id: '6100005', name: 'Tanger Ville', location: { latitude: 35.7572, longitude: -5.8131 } },

  // ── Egypt ────────────────────────────────────────────────────────────────

  { id: '6200001', name: 'Cairo Ramses', location: { latitude: 30.0603, longitude: 31.2467 } },
  { id: '6200002', name: 'Alexandria', location: { latitude: 31.1997, longitude: 29.9053 } },
  { id: '6200003', name: 'Luxor', location: { latitude: 25.6847, longitude: 32.6394 } },
  { id: '6200004', name: 'Aswan', location: { latitude: 24.0886, longitude: 32.8994 } },

  // ── Kenya ────────────────────────────────────────────────────────────────

  { id: '6300001', name: 'Nairobi SGR', location: { latitude: -1.3192, longitude: 36.9256 } },

  // ── UAE ──────────────────────────────────────────────────────────────────

  { id: '5800001', name: 'Dubai Mall/Burj Khalifa Metro', location: { latitude: 25.1972, longitude: 55.2797 } },
  { id: '5800002', name: 'Dubai Airport Metro Terminal 1', location: { latitude: 25.2550, longitude: 55.3644 } },
  { id: '5800003', name: 'Dubai Expo Metro', location: { latitude: 24.9694, longitude: 55.1644 } },

  // ── Singapore ────────────────────────────────────────────────────────────

  { id: '5900001', name: 'Singapore Woodlands', location: { latitude: 1.3531, longitude: 103.8278 } },

]

export function searchStations(query) {
  if (!query || query.length < 2) return []
  const q = query.toLowerCase()
  return STATIONS
    .filter(s => s.name.toLowerCase().includes(q))
    .slice(0, 8)
}
