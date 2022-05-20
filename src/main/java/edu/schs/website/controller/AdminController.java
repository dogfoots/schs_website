package edu.schs.website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("admin")
public class AdminController {
	
	@RequestMapping("/write")
	public String write() {
		return "index";
	}
}
