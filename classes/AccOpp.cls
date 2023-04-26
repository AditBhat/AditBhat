public class AccOpp {

   public   Decimal summopp;
    public static void sum(){
        Decimal sumall=0;
        List<Opportunity> acclst=[Select Id,Amount from Opportunity where AccountId='001Iw000003MlWCIA0'];
        
        for(Opportunity a:acclst){

         sumall+=a.Amount ;
      
        }
        system.debug(sumall);
    }
}