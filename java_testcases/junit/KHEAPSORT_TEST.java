package java_testcases.junit;

import static org.junit.Assert.*;
import org.junit.Test;
import java_programs.KHEAPSORT;
import com.google.gson.JsonParser;

public class KHEAPSORT_TEST {
  /**
   * Junit test case for KHEAPSORT generated by tests generator.
   */
  @Test(timeout = 100)
  public void kheapsort_test1() {
    try {
      Object actual = KHEAPSORT.kheapsort(new java.util.ArrayList(java.util.Arrays.asList(1,2,3,4,5)),(int)0);
      assertEquals("[1,2,3,4,5]",actual.toString() );
    }
    catch(IllegalArgumentException e) {
      throw new IllegalArgumentException("Arguments are illegal!") ;
    }
  }

  @Test(timeout = 100)
  public void kheapsort_test2() {
    try {
      Object actual = KHEAPSORT.kheapsort(new java.util.ArrayList(java.util.Arrays.asList(3,2,1,5,4)),(int)2);
      assertEquals("[1,2,3,4,5]",actual.toString() );
    }
    catch(IllegalArgumentException e) {
      throw new IllegalArgumentException("Arguments are illegal!") ;
    }
  }

  @Test(timeout = 100)
  public void kheapsort_test3() {
    try {
      Object actual = KHEAPSORT.kheapsort(new java.util.ArrayList(java.util.Arrays.asList(5,4,3,2,1)),(int)4);
      assertEquals("[1,2,3,4,5]",actual.toString() );
    }
    catch(IllegalArgumentException e) {
      throw new IllegalArgumentException("Arguments are illegal!") ;
    }
  }

  @Test(timeout = 100)
  public void kheapsort_test4() {
    try {
      Object actual = KHEAPSORT.kheapsort(new java.util.ArrayList(java.util.Arrays.asList(3,12,5,1,6)),(int)3);
      assertEquals("[1,3,5,6,12]",actual.toString() );
    }
    catch(IllegalArgumentException e) {
      throw new IllegalArgumentException("Arguments are illegal!") ;
    }
  }

}