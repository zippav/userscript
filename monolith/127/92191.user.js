// ==UserScript==
// @name AAO-Datei
// @description zur Nutzung im AAO-Script von Sawos

# AAO-Datei
#   zur Nutzung im AAO-Script von Sawos
#   s. http://userscripts.org/scripts/show/50002
#
# leere Zeilen und Zeilen, die mit # beginnen, werden nicht berücksichtigt,
# Zeilen, die mit === beginnen, leiten einen neuen Abschnitt ein
# innerhalb der Abschnitte gilt immer "Key<TAB>Value" , wobei beliebig viele 
# Tabs erlaubt sind - aber NUR Tabs, keine Leerzeichen!
#

===Einsatzklassen

Auffahrunfall				F1
Baum auf Auto				THA
Baum auf Dach				THC
Baum auf Straße				TH1
Brand in Autohaus			F4
Brand in Briefkasten			F1
Brand in Druckerei			F4+HLF
Brand in KFZ-Werkstatt			F3+TLF+GW-K
Brand in Spedition			F4+HLF,TLF
Brand in Schule				F4
Brand in Spedition			F4+HLF,TLF
Brand in Sporthalle			F4+GW-L2
Brand in Zugdepot			F5+GW-S
Brand im Baumarkt			F4+HLF
Brand im Sägewerk			F4+GW-L2
Brand im Supermarkt			F4
Brennende Bäume				F1
Brennende S-Bahn			F2+GW-S
Brennende Telefonzelle			F1
Brennender LKW				F1
Brennender Müllwagen			F1
Brennender PKW				F1
Brennender Sicherungskasten		F1
Brennendes Gras				F1
Chemieunfall (an Schule)		GSG
Chlorgas Alarm (Schwimmbad)		GSG
Container Brand				F1
Dachstuhlbrand				F2+DL
Fahrstuhl - Türöffnung			TH1
Feldbrand				F1+GW-L2
Fettbrand in Pommesbude			F3+TLF
Feuer im Altenheim			F4
Feuer im Laubhaufen			F1
Gartenlaubenbrand			F1
Gastronomiebrand			F4
Gewerbebrand				F4+HLF
Kellerbrand				F2+GW-A
Keller unter Wasser			LF
Kinobrand				F4+TLF
Kleiner Waldbrand			F1
Motorrad-Brand				F1
Mülleimer Brand				F1
Ölspur					F1+GW-Öl
Person im Fluss				LF,GW-T
Scheunenbrand				F3+GW-L2
Schornsteinbrand			F2+DL
Schuppenbrand				F2
Silobrand				F3
Sperrmüllbrand				F1
Strohballen Brand			F2+GW-L2
Traktorbrand				F2+GW-Öl
Verkehrsunfall				THB
Wohnblockbrand				F4
Wohnungsbrand				F4
Wohnwagenbrand				F1
Brand auf Weihnachtsmarkt		F2
Brand-Weihnachtsbaum in Kirche		F3
# 29.03.2010
Trocknerbrand				F1
Brand in Reifenlager			F4+GW-L2|GW-M,GW-G
Brand im Casino				F5+TLF
# 17.04.2010
Brand in Lackfabrik			F4+HLF
# 23.04.2010
Brennendes Gebüsch			F1
Kioskbrand				F1
Garagenbrand				F2
Mähdrescherbrand			F1+TLF
Kaminbrand				F2+DL
PKW in Fluss				GW-K,GW-T,HLF|RW,LF
Brand in Schloss			F4
Brand in Kühlhaus			F4
Feuer im Krankenhaus			F5
Brand in Kletterhalle			F3
# 07.12.2010
Brand in Metzgerei			F3
Brand in Eishalle			F3+TLF+GW-L2
Brand in Gärtnerei			F3
Feuer auf Boot (Mittel)			Boot+Boot
Feuer auf Boot (Klein)			Boot
Brennendes Flugzeug			F5+FLF+FLF+Tre
Brand in Industriepark			F5
Gabelstapler im Hafenbecken		F1+GW-K+GW-T
Brand in Gemeindehaus			F3
Maschinenbrand				F3+GW-L2
Brand in Steinbruch			VGS

===Fahrzeugzuordnung

undef		LF
F1		LF
F2		LF,LF
F3		LF,LF,LF/TLF,ELW
F4		LF,LF,LF,LF/TLF,DL,ELW,GW-A
F5		LF,LF,LF,LF,HLF,LF/TLF,DL,ELW,GW-A
TH1		HLF,RW,LF
TH2		HLF,LF,RW,LF
THA		HLF,GW-Öl|RW,LF
THB		HLF,LF,GW-Öl|RW,LF
THC		HLF,LF,DL|RW,LF
GSG		LF,LF,LF,HLF,LF/TLF,ELW,GW-M,GW-G|RW
VGS		LF,LF,LF,LF,LF,HLF,LF/TLF,RW,ELW,ELW,GW-K

===Fahrzeugklassen

RTW			RTW
LF 10/6			LF
LF 20/16		LF
LF 8			LF
Kleinlöschfahrzeug	LF
TLF 20/40 - SL		TLF
DLA (K) 23/12		DL
ELW 1			ELW
LF 16-TS		TS
RW			RW
GW-A			GW-A
GW-L2 - Wasser		GW-L2
GW-Öl			GW-Öl
GW-Schiene		GW-S
GW-Taucher		GW-T
GW-Gefahrgut		GW-G
GW-Messtechnik		GW-M
Kran			GW-K
Feuerlöschboot		Boot
Flugfeldlöschfahrzeug	FLF
Rettungstreppe		Tre
HLF 20/16		HLF
HLF 10/6		HLF

===Ende
#

// ==/UserScript==