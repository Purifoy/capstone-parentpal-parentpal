package team.parentpal.JavaToJSON;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

import java.lang.reflect.Field;
import java.lang.reflect.Type;

public class ObjectToJsonConverter {

    private Gson gson;

    public ObjectToJsonConverter() {
        this.gson = new GsonBuilder()
                .registerTypeHierarchyAdapter(Object.class, new JsonSerializer<Object>() {
                    @Override
                    public JsonElement serialize(Object src, Type typeOfSrc, JsonSerializationContext context) {
                        JsonElement jsonElement = new Gson().toJsonTree(src);

                        Field[] fields = src.getClass().getDeclaredFields();
                        for (Field field : fields) {
                            if (java.lang.reflect.Modifier.isTransient(field.getModifiers())) {
                                jsonElement.getAsJsonObject().remove(field.getName());
                            }
                        }

                        return jsonElement;
                    }
                })
                .create();
    }

    public String convert(Object object) {
        return gson.toJson(object);
    }
}