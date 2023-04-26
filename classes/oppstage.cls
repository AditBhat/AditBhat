public class oppstage {

    public static void oppsta(){
       Integer p=0; Integer q=0; Integer na=0; Integer vp=0; Integer dm=0; Integer pa=0; Integer pq=0; Integer nr=0; Integer cw=0; Integer cl=0;
        List<Opportunity> opp=[Select 	StageName from Opportunity ];
        for(Opportunity o:opp){
            if(o.StageName=='Prospecting'){
                p++;
            }
            else if(o.StageName=='Qualification'){
                q++;
            }
              else if(o.StageName=='Needs Analysis'){
                na++;
            }
              else if(o.StageName=='Value Proposition'){
                vp++;
            }
              else if(o.StageName=='Id. Decision Makers'){
                dm++;
            }
              else if(o.StageName=='Perception Analysis'){
                pa++;
            }
          
               else if(o.StageName=='Proposal/Price Quote'){
                pq++;
            }
               else if(o.StageName=='Negotiation/Review'){
                nr++;
            }
               else if(o.StageName=='Closed Won'){
                cw++;
            }
              else if(o.StageName=='Closed Lost'){
                cl++;
            }
            
        }
      system.debug(p); system.debug(q);    system.debug(na);      system.debug(vp);  system.debug(dm); system.debug(pa); system.debug(pq); system.debug(nr); system.debug(cw); system.debug(cl);
 
    }
}