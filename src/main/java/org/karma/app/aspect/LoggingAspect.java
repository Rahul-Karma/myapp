package org.karma.app.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class LoggingAspect {
	
	@AfterReturning(pointcut="execution(public int send())", returning="result")
	public void beforeAdvice(JoinPoint point, Object result) {
		System.out.println("AfterReturning Advice executed....");
		System.out.println("Method name:: "+point.getSignature().getName() );
		System.out.println("return value"+result);
	}
	
	@AfterThrowing(pointcut="execution(public int send())", throwing="e")
	public void beforeAdvice(JoinPoint point, Throwable e) {
		System.out.println("AfterReturning Advice executed....");
		System.out.println("Method name:: "+point.getSignature().getName() );
		System.out.println("return value"+e.getMessage());
	}

}
