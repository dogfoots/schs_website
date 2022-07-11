package edu.schs.website;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Configuration
public class WebConfig extends WebMvcConfigurationSupport{
	@Override    
	public void addResourceHandlers(ResourceHandlerRegistry registry) {        
		registry.addResourceHandler("/imgs/**")
		.addResourceLocations("classpath:/static/imgs/")
		.addResourceLocations("classpath:/static/imgs/1hall/")
		.addResourceLocations("classpath:/static/imgs/3hall/")
		.addResourceLocations("classpath:/static/imgs/4th/")
		.addResourceLocations("classpath:/static/imgs/cafe/")
		.addResourceLocations("classpath:/static/imgs/cafeteria/")
		.addResourceLocations("classpath:/static/imgs/chapel/")
		.addResourceLocations("classpath:/static/imgs/dummies/")
		.addResourceLocations("classpath:/static/imgs/ele_cls_room/")
		.addResourceLocations("classpath:/static/imgs/ele_teach/")
		.addResourceLocations("classpath:/static/imgs/iniqs/")
		.addResourceLocations("classpath:/static/imgs/library/")
		.addResourceLocations("classpath:/static/imgs/md_cls_room/")
		.addResourceLocations("classpath:/static/imgs/md_teach/")
		.addResourceLocations("classpath:/static/imgs/mdom/")
		.addResourceLocations("classpath:/static/imgs/science/")
		.addResourceLocations("classpath:/static/imgs/teachers/")
		.addResourceLocations("classpath:/static/imgs/wdom/");
		registry.addResourceHandler("/css/**").addResourceLocations("classpath:/static/css/");
		registry.addResourceHandler("/js/**").addResourceLocations("classpath:/static/js/");
		registry.addResourceHandler("/fonts/**").addResourceLocations("classpath:/static/fonts/");
		registry.addResourceHandler("/downloads/**").addResourceLocations("classpath:/static/downloads/");
		registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
	}
	
}
