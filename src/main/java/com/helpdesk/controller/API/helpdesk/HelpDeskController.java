package com.helpdesk.controller.API.helpdesk;

import com.helpdesk.domain.helpdesk.HelpDeskTask;
import com.helpdesk.domain.user.User;
import com.helpdesk.repo.helpdesk.HelpDeskTaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/helpdesk")
public class HelpDeskController {

    @Autowired
    private HelpDeskTaskRepo helpDeskTaskRepo;

    @GetMapping
    public Page<HelpDeskTask> all(
            @RequestParam(value = "page", defaultValue = "0") int page
    ){
        return helpDeskTaskRepo.findAll(PageRequest.of(page, 9, Sort.by(Sort.Direction.DESC, "id")));
    }

    @GetMapping("{id}")
    public HelpDeskTask find(@PathVariable("id") HelpDeskTask helpDeskTask){
        return helpDeskTask;
    }

    @PostMapping
    public HelpDeskTask store(
            @AuthenticationPrincipal User user,
            @RequestBody HelpDeskTask task
           ){

        return helpDeskTaskRepo.save(task);
    }
}
