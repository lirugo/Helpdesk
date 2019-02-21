package com.helpdesk.domain.helpdesk;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.helpdesk.domain.user.User;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "help_desk_task")
@Data
@EntityListeners(AuditingEntityListener.class)
public class HelpDeskTask {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    @CreatedBy
    private User author;

    private String title;
    private String description;
    private boolean done;
    private HelpDeskPriority priority;

    @Column(name="problem_with")
    private HelpDeskProblem problemWith;

    @Column(updatable = false, name = "desire_date_of_execution")
    private Date desireDateOfExecution;

    @CreatedDate
    @Column(updatable = false, name = "created_at")
    private Date createdAt;

}
