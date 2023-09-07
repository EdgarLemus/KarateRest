package runners;


import com.intuit.karate.junit5.Karate;

public class KarateRunner {

	@Karate.Test
    Karate geographicalDataGet(){
        return Karate.run().relativeTo(getClass());
    }
}
