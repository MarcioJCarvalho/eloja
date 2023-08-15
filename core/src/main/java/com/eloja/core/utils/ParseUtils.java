package com.eloja.core.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
public class ParseUtils {

    private static ModelMapper modelMapper;

    public ParseUtils(ModelMapper modelMapper){
        this.modelMapper = modelMapper;
    }

    /***
     * Método responsável por converter/mapear um objeto para uma determinada classe
     * @param objetoOrigem
     * @param classeDestino
     * @return V objeto mapeado
     * @param <T>
     * @param <V>
     */
    public static <T, V> V parse(T objetoOrigem, Class<V> classeDestino) {
        V v = null;
        try {
            v = modelMapper.map(objetoOrigem, classeDestino);
        } catch (Exception e) {
            log.error("Não foi possível converter o objeto {" + ToStringBuilder.reflectionToString(objetoOrigem) + "} para a classe {" + classeDestino.getSimpleName() + "}.");
            throw new RuntimeException(e);
        }
        return v;
    }

    /***
     * Método responsável por converter/mapear uma lista de objetos para um determinada classe
     * @param listaOrigem
     * @param classeDestino
     * @return List<V> lista mapeada
     * @param <T>
     * @param <V>
     */
    public static <T, V> List<V> parse(List<T> listaOrigem, Class<V> classeDestino) {
        List<V> vList = new ArrayList<V>();
        if (listaOrigem == null || listaOrigem.isEmpty()) {
            return vList;
        }
        for (T t : listaOrigem) {
            V vo = parse(t, classeDestino);
            if (vo != null) {
                vList.add(vo);
            }
        }
        return vList;
    }
}
