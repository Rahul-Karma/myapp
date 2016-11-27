package com.karma.app.configuration;

import org.karma.app.aspect.TimeLoggingInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;
 
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.karma.app")
public class HelloWorldConfiguration extends WebMvcConfigurerAdapter {
	
	@Bean(name="timeLoggingInterceptor")
	public TimeLoggingInterceptor timeLoggingInterceptor() {
		return new TimeLoggingInterceptor();
	}
     
    @Bean(name="HelloWorld")
    public ViewResolver viewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/WEB-INF/jspviews/");
        viewResolver.setSuffix(".jsp");
 
        return viewResolver;
    }
 
    /*
     * Configure ResourceHandlers to serve static resources like CSS/ Javascript etc...
     *
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/components/**").addResourceLocations("/components/");
        registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
        registry.addResourceHandler("/static/**").addResourceLocations("/static/");
        registry.addResourceHandler("/staticresources/**").addResourceLocations("/staticresources/");
        
    }
    
/*    @Override
    public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(mappingJackson2HttpMessageConverter());
    }
     
    @Bean
    public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        //converter.setObjectMapper(new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false));
        converter.setObjectMapper(new ObjectMapper().configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false));
        return converter;
    }*/
    
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
    	registry.addInterceptor(timeLoggingInterceptor()).addPathPatterns("/admin/*");
    }
}