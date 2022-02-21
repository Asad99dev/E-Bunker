package com.ebunker.backend.Model;

import java.util.HashMap;
import java.util.Map;
import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"q1",
"q2",
"q4",
"q5",
"q6",
"q7",
"q8",
"q9",
"q10"
})
@Generated("jsonschema2pojo")
public class Survey {

@JsonProperty("q1")
private String q1;
@JsonProperty("q2")
private String q2;
@JsonProperty("q4")
private String q4;
@JsonProperty("q5")
private String q5;
@JsonProperty("q6")
private String q6;
@JsonProperty("q7")
private String q7;
@JsonProperty("q8")
private String q8;
@JsonProperty("q9")
private String q9;
@JsonProperty("q10")
private String q10;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("q1")
public String getQ1() {
return q1;
}

@JsonProperty("q1")
public void setQ1(String q1) {
this.q1 = q1;
}

@JsonProperty("q2")
public String getQ2() {
return q2;
}

@JsonProperty("q2")
public void setQ2(String q2) {
this.q2 = q2;
}

@JsonProperty("q4")
public String getQ4() {
return q4;
}

@JsonProperty("q4")
public void setQ4(String q4) {
this.q4 = q4;
}

@JsonProperty("q5")
public String getQ5() {
return q5;
}

@JsonProperty("q5")
public void setQ5(String q5) {
this.q5 = q5;
}

@JsonProperty("q6")
public String getQ6() {
return q6;
}

@JsonProperty("q6")
public void setQ6(String q6) {
this.q6 = q6;
}

@JsonProperty("q7")
public String getQ7() {
return q7;
}

@JsonProperty("q7")
public void setQ7(String q7) {
this.q7 = q7;
}

@JsonProperty("q8")
public String getQ8() {
return q8;
}

@JsonProperty("q8")
public void setQ8(String q8) {
this.q8 = q8;
}

@JsonProperty("q9")
public String getQ9() {
return q9;
}

@JsonProperty("q9")
public void setQ9(String q9) {
this.q9 = q9;
}

@JsonProperty("q10")
public String getQ10() {
return q10;
}

@JsonProperty("q10")
public void setQ10(String q10) {
this.q10 = q10;
}

@JsonAnyGetter
public Map<String, Object> getAdditionalProperties() {
return this.additionalProperties;
}

@JsonAnySetter
public void setAdditionalProperty(String name, Object value) {
this.additionalProperties.put(name, value);
}

}