package com.helpdesk.domain.helpdesk;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.helpdesk.domain.user.User;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name = "help_desk_task")
@Data
public class HelpDeskTask {

    @Id
    private String id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User author;

    private String title;
    private String description;
    private boolean done;
    private HelpDeskPriority priority;
    private HelpDeskProblem problem_with;

    @Column(updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm")
    private LocalDateTime desire_date_of_completion;

    @Column(updatable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy HH:mm")
    private LocalDateTime created_at;

}
